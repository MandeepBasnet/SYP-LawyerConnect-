import express from "express"
import {
  lawyerList,
  loginLawyer,
  appointmentsLawyer,
  appointmentComplete,
  appointmentCancel,
  lawyerDashboard,
  lawyerProfile,
  updateLawyerProfile
} from "../controllers/lawyerController.js"
import authLawyer from "../middlewares/authLawyer.js"

const lawyerRouter = express.Router()

// Add a debug middleware to log all requests
lawyerRouter.use((req, res, next) => {
  console.log(`Lawyer API Request: ${req.method} ${req.path}`)
  console.log("Headers:", req.headers)
  next()
})

lawyerRouter.get("/list", lawyerList)
lawyerRouter.post("/login", loginLawyer)
lawyerRouter.get("/appointments", authLawyer, appointmentsLawyer)
lawyerRouter.post("/complete-appointment", authLawyer, appointmentComplete)
lawyerRouter.post("/cancel-appointment", authLawyer, appointmentCancel)
lawyerRouter.get("/dashboard", authLawyer, lawyerDashboard)
lawyerRouter.get("/profile", authLawyer, lawyerProfile)
lawyerRouter.post("/update-profile", authLawyer, updateLawyerProfile)

export default lawyerRouter

