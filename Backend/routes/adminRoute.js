import express from "express"
import { addlawyer } from "../controllers/adminController.js"
import upload from "../middlewares/multer.js"

const adminRouter = express.Router()

// Make sure the field name matches what your client is sending
adminRouter.post("/add-lawyer", upload.single("image"), addlawyer)

export default adminRouter

