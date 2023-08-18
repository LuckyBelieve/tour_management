import Tour from "../models/Tour.js";

//create a new tour

export const CreateTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const saveTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "successfully created a new tour",
      data: saveTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to create a new tour: ",
    });
  }
};

// delete a tour

export const DeleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteTour = await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully deleted the tour",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to delete tour: ",
    });
  }
};

// getAll a tour
export const getAllTour = async (req, res) => {
  //  for page pagination purposes
  const page = parseInt(req.query.page);
  try {
    const AllTours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: AllTours.length,
      message: "successfully got all the tours",
      data: AllTours,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "failed to fetch all the tours",
      data: AllTours,
    });
  }
};

// update a tour

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully created a new tour",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to update tour: ",
    });
  }
};

// getSingle a tour

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleTour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "successfully got the tour",
      data: getSingleTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to get a tour: ",
    });
  }
};

//get tour by searching

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const searchedTour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "search results available",
      data: searchedTour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "the tour is not found: ",
    });
  }
};

// get all features tours
export const getFeaturedTour = async (req, res) => {
  try {
    const AllFeaturedTours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      message: "successfully got all the featured tours",
      data: AllFeaturedTours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to fetch all the tours",
    });
  }
};

export const getTourCount = async (req, res) => {
  try {
    const TourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: TourCount,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to fetch the number tours",
    });
  }
};
