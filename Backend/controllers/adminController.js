import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import lawyerModel from "../models/lawyerModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

//API for adding lawyer
const addlawyer = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      practice,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    // Checking for all data to add lawyer
    if (
      !name ||
      !email ||
      !password ||
      !practice ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Validating email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validating password format
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password with minimum 8 characters",
      });
    }

    // Check if email already exists
    const existingLawyer = await lawyerModel.findOne({ email });
    if (existingLawyer) {
      return res.json({
        success: false,
        message: "Email already registered",
      });
    }

    // Hashing Lawyer password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Handle address parsing
    let parsedAddress;
    try {
      parsedAddress =
        typeof address === "object" ? address : JSON.parse(address);
    } catch (error) {
      console.error("Address parsing error:", error);
      return res.json({
        success: false,
        message: "Invalid address format. Please provide a valid JSON object.",
      });
    }

    // Handle image upload
    let imageUrl = "";

    // Check if image file exists
    if (!req.file) {
      return res.json({
        success: false,
        message: "Profile image is required",
      });
    }

    try {
      const imageUpload = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      imageUrl = imageUpload.secure_url;
    } catch (cloudinaryError) {
      console.error("Cloudinary upload error:", cloudinaryError);
      return res.json({
        success: false,
        message: "Error uploading image. Please try again.",
      });
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
    };

    const newLawyer = new lawyerModel(lawyerData);
    await newLawyer.save();

    res.json({ success: true, message: "Lawyer added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API for admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET_KEY);
      res.json({
        success: true,
        message: "Admin logged in successfully",
        token: token,
      });
    } else {
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get all lawyers list for admin panel
const allLawyers = async (req, res) => {
  try {
    const lawyers = await lawyerModel.find({}).select("-password");
    res.json({ success: true, lawyers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get all appointments list for admin
const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API For appointment cancellation by Admin
const appointmentCancel = async (req, res) => {
  try {
    
    const {appointmentId} = req.body
    const appointmentData = await appointmentModel.findById(appointmentId)


    await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

    //releasing lawyers Slot
    const {lawyerId, slotDate, slotTime} = appointmentData
    
    const lawyerData = await lawyerModel.findById(lawyerId)
    
    let slots_booked = lawyerData.slots_booked
    
    slots_booked[slotDate] = slots_booked[slotDate].filter((e) => e !== slotTime)
    
    await lawyerModel.findByIdAndUpdate(lawyerId, {slots_booked})

    res.json({success: true, message: "Appointment cancelled successfully"})

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

//API to get Dachboard data for admin panel
const adminDashboard = async (req, res) => {
  try {
    const lawyers = await lawyerModel.find({})
    const users = await userModel.find({})
    const appointments = await appointmentModel.find({})

    const dashData = {
      lawyers: lawyers.length,
      clients: users.length,
      appointments: appointments.length,
      latestAppointments: appointments.reverse().slice(0, 5)
    }

    res.json({ success: true, dashData })


  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export { addlawyer, loginAdmin, allLawyers, appointmentsAdmin, appointmentCancel, adminDashboard };
