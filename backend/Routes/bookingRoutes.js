import express from "express";
import { verifyAdmin, verifyUser } from "../middleware/authMiddleware.js";
import { creatBooking, getAllBooking, getBooking } from "../Controllers/bookingController.js";
const Router = express.Router();
Router.post("/", verifyUser, creatBooking);
Router.get("/booked/:id", verifyUser, getBooking);
Router.get("/allBooking", verifyAdmin, getAllBooking);


export default Router;