import validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import lawyerModel from "../models/lawyerModel.js"
import jwt from "jsonwebtoken"

//API for adding lawyer
const addlawyer = async (req, res) => {
  try {
    const { name, email, password, practice, degree, experience, about, fees, address } = req.body

    console.log("Request body:", req.body)
    console.log("Request file:", req.file)

    // Checking for all data to add lawyer
    if (!name || !email || !password || !practice || !degree || !experience || !about || !fees || !address) {
      return res.json({ success: false, message: "All fields are required" })
    }

    // Validating email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      })
    }

    // Validating password format
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password with minimum 8 characters",
      })
    }

    // Check if email already exists
    const existingLawyer = await lawyerModel.findOne({ email })
    if (existingLawyer) {
      return res.json({
        success: false,
        message: "Email already registered",
      })
    }

    // Hashing Lawyer password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Handle address parsing
    let parsedAddress
    try {
      parsedAddress = typeof address === "object" ? address : JSON.parse(address)
    } catch (error) {
      console.error("Address parsing error:", error)
      return res.json({
        success: false,
        message: "Invalid address format. Please provide a valid JSON object.",
      })
    }

    // Handle image upload
    let imageUrl = ""

    // Check if image file exists
    if (!req.file) {
      return res.json({
        success: false,
        message: "Profile image is required",
      })
    }

    try {
      const imageUpload = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      })
      imageUrl = imageUpload.secure_url
    } catch (cloudinaryError) {
      console.error("Cloudinary upload error:", cloudinaryError)
      return res.json({
        success: false,
        message: "Error uploading image. Please try again.",
      })
    }

    // Adding lawyer to database
    const lawyerData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      practice,
      degree,
      experience,
      about,
      fees: Number(fees),
      address: parsedAddress,
      date: Date.now(),
    }

    const newLawyer = new lawyerModel(lawyerData)
    await newLawyer.save()

    res.json({ success: true, message: "Lawyer added successfully" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//API for admin login
const loginAdmin = async (req, res) => {
  try{

    const { email, password } = req.body

    if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

      const token = jwt.sign(email+password, process.env.JWT_SECRET_KEY)
      res.json({ success: true, message: "Admin logged in successfully", token: token })
    } else {
      res.json({ success: false, message: "Invalid email or password" })
    }
  }
  catch(error){
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get all lawyers list for admin panel
const allLawyers = async (req, res) =>{
  try {
    const lawyers = await lawyerModel.find({}).select('-password')
    res.json({ success: true, lawyers })
    
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
    
  }
}


export { addlawyer, loginAdmin, allLawyers }

