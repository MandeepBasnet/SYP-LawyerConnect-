import express from "express"
import { addlawyer,allLawyers,loginAdmin } from "../controllers/adminController.js"
import upload from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js"

const adminRouter = express.Router()

// Make sure the field name matches what your client is sending
adminRouter.post("/add-lawyer",authAdmin, upload.single("image"), addlawyer)
adminRouter.post("/login",  loginAdmin)
adminRouter.post("/all-lawyers",authAdmin,  allLawyers)

export default adminRouter

