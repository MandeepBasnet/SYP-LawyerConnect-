import express from "express";
import { addlaywer } from "../controllers/adminController";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-lawyer", upload.single("image"), addlaywer);

export default adminRouter;