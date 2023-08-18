import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./utils/DBconnection.js";
import cookieParser from "cookie-parser";
import tourRoutes from "./Routes/tourRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import authRoutes from "./Routes/authRoutes.js";
import reviewRoutes from "./Routes/reviewRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//  db connection

connectDB();

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

// middlewares

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/booking", bookingRoutes);
