import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import {v2 as cloudinary} from "cloudinary"
import lawyerModel from "../models/lawyerModel.js";
import appointmentModel from "../models/appointmentModel.js";

//API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    //Validate Email Format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password with minimum 8 characters",
      });
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res.json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API for user login
//API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      return res.json({
        success: true,
        message: "User logged in successfully",
        token,
      });
    } else {
      return res.json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get user profile data
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to update user profile
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !address || !dob || !gender) {
      return res.json({ success: false, message: "All fields are required" });
    }
    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      //Upload Image to Cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
      const imageURL = imageUpload.secure_url

      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to book Appointment
const bookAppointment = async (req, res) => {
  try {

    const { userId, lawyerId, slotDate, slotTime } = req.body;

    const lawData = await lawyerModel.findById(lawyerId).select("-password");

    if (!lawData.available) {
      return res.json({ success: false, message: "Lawyer is currently unavailable" });
    }

    let slots_booked = lawData.slots_booked

    // Checking for slots availability
    if (slots_booked[slotDate]){
      if (slots_booked[slotDate].includes(slotTime)){
        return res.json({ success: false, message: "Slot is already booked" });
      }else{
        slots_booked[slotDate].push(slotTime)
      }
    } else {
      slots_booked[slotDate] = []
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select("-password");

    delete lawData.slots_booked

    const appointmentData = {
      userId,
      lawyerId,
      userData,
      lawData,
      amount: lawData.fees,
      slotDate,
      slotTime,
      date: new Date().getTime(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    // Save new slots data in lawyers data
    await lawyerModel.findByIdAndUpdate(lawyerId, { slots_booked });

    res.json({ success: true, message: "Appointment booked successfully" });
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    
  }
};

//API to get user appointments for frontend my appointment pages
const listAppointment = async (req, res) => {
  try {
    const {userId} = req.body
    const appointments = await appointmentModel.find({userId})
    res.json({success: true, appointments})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

//API to cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    
    const {userId, appointmentId} = req.body
    const appointmentData = await appointmentModel.findById(appointmentId)
    // Verify Appointment user
    if (appointmentData.userId !== userId){
      return res.json({success: false, message: "You are not authorized to cancel this appointment"})
    }

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

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment };
