import jwt from "jsonwebtoken"
import lawyerModel from "../models/lawyerModel.js"

//lawyer authentication middleware
const authLawyer = async (req, res, next) => {
  try {
    // Log the headers to debug
    console.log("Request headers:", req.headers)

    // Check for token in both formats (for backward compatibility)
    const token = req.headers.ltoken || req.headers.lToken

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized Personnel, Please login Again",
      })
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

    // Optional: Verify the lawyer still exists
    const lawyer = await lawyerModel.findById(token_decode.id)
    if (!lawyer) {
      return res.status(401).json({
        success: false,
        message: "Lawyer not found. Please login again.",
      })
    }

    req.body.lawyerId = token_decode.id

    next()
  } catch (error) {
    console.log(error)
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token. Please login again.",
      })
    }
    res.status(500).json({
      success: false,
      message: "Authentication error occurred",
    })
  }
}

export default authLawyer

