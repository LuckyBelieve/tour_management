import express from "express";
import { verifyUser } from "../middleware/authMiddleware.js";
import { createReview } from "../Controllers/reviewController.js";
const Router = express.Router();
Router.post("/create/:tourId", verifyUser, createReview);

export default Router;
