import lawyerModel from "../models/lawyerModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js"

const changeAvailability = async (req, res) => {
  try {
    const { lawId } = req.body

    const lawData = await lawyerModel.findById(lawId)
    await lawyerModel.findByIdAndUpdate(lawId, { available: !lawData.available })
    res.json({ success: true, message: "Availability changed successfully" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const lawyerList = async (req, res) => {
  try {
    const lawyers = await lawyerModel.find({}).select(["-password", "-email"])
    res.json({ success: true, lawyers })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//API for lawyer login
const loginLawyer = async (req, res) => {
  try {
    const { email, password } = req.body
    const lawyer = await lawyerModel.findOne({ email })

    if (!lawyer) {
      return res.json({ success: false, message: "Lawyer not found" })
    }
    const isMatch = await bcrypt.compare(password, lawyer.password)

    if (isMatch) {
      const token = jwt.sign({ id: lawyer._id }, process.env.JWT_SECRET_KEY)

      res.json({
        success: true,
        message: "Lawyer logged in successfully",
        token: token,
      })
    } else {
      res.json({ success: false, message: "Invalid password" })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//API to get lawyers appointments for lawyer panel
const appointmentsLawyer = async (req, res) => {
  try {
    const { lawyerId } = req.body // Changed from lawId to lawyerId to match middleware
    console.log("Lawyer ID for appointments:", lawyerId)

    const appointments = await appointmentModel.find({ lawyerId }) // Changed from lawId to lawyerId
    res.json({ success: true, appointments })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//API to mark appointment completed for lawyer panel
const appointmentComplete = async (req, res) => {
  try {
    const { lawyerId, appointmentId } = req.body // Changed from lawId to lawyerId

    const appointmentData = await appointmentModel.findById(appointmentId)

    if (appointmentData && appointmentData.lawyerId === lawyerId) {
      // Changed from lawId to lawyerId
      await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
      return res.json({ success: true, message: "Appointment marked as completed" })
    } else {
      return res.json({ success: false, message: "Appointment mark failed" })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//API to cancel appointment completed for lawyer panel
const appointmentCancel = async (req, res) => {
  try {
    const { lawyerId, appointmentId } = req.body // Changed from lawId to lawyerId

    const appointmentData = await appointmentModel.findById(appointmentId)

    if (appointmentData && appointmentData.lawyerId === lawyerId) {
      // Changed from lawId to lawyerId
      await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
      return res.json({ success: true, message: "Appointment Cancelled" })
    } else {
      return res.json({ success: false, message: "Appointment Cancellation failed" })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get dashboard data for lawyer panel
const lawyerDashboard = async (req, res) => {
  try {
    const lawyerId = req.body.lawyerId // Use the lawyerId added by the middleware
    console.log("Lawyer ID for dashboard:", lawyerId)

    const appointments = await appointmentModel.find({ lawyerId }) // Changed from lawId to lawyerId

    let earnings = 0
    appointments.forEach((item) => {
      if (item.isCompleted) {
        earnings += item.amount
      }
    })

    const clients = [...new Set(appointments.map((item) => item.userId))]

    const dashData = {
      appointments: appointments.length,
      clients: clients.length,
      earnings,
      latestAppointments: appointments.slice().reverse().slice(0, 5),
    }

    res.json({ success: true, dashData })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// API to get Lawyer profile for lawyer panel
const lawyerProfile = async (req, res) => {
  try {
    const lawyerId = req.body.lawyerId // Use the lawyerId added by the middleware
    const profileData = await lawyerModel.findById(lawyerId).select("-password")
    res.json({ success: true, profileData })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
}


//API to update Lawyer Profile from Lawyer Panel
const updateLawyerProfile = async (req, res) => {
  try {
    const {lawyerId, fees, address, available} = req.body
    await lawyerModel.findByIdAndUpdate(lawyerId, {fees, address, available})
    res.json({success: true, message: "Lawyer Profile Updated Successfully"})
      } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
      }
    }


export {
  changeAvailability,
  lawyerList,
  loginLawyer,
  appointmentsLawyer,
  appointmentComplete,
  appointmentCancel,
  lawyerDashboard,
  lawyerProfile,
  updateLawyerProfile
}

