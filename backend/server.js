import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./utils/DBconnection.js";
import cookieParser from "cookie-parser";
import tourRoutes from "./Routes/tourRoutes.js";

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

app.use("/tours", tourRoutes);
