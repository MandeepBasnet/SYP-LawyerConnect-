import express from "express";
import { addlawyer } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-lawyer", upload.single("image"), addlawyer);

export default adminRouter;