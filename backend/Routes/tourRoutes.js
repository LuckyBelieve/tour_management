import express from "express";
import {
  CreateTour,
  DeleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../Controllers/TourController.js";
const Router = express.Router();

//create a new tour
Router.post("/createTour", CreateTour);

//update a new tour
Router.put("/update/:id", updateTour);

//delete a new tour
Router.delete("/delete/:id", DeleteTour);

//getSingle a new tour
Router.get("/tour/:id", getSingleTour);

//getAll a new tour
Router.get("/allTour", getAllTour);

//get  tour by search
Router.get("/search", getTourBySearch);

//get all featured tours
Router.get("/featured", getFeaturedTour);

//get all featured tours
Router.get("/tourcount", getTourCount);

export default Router;
