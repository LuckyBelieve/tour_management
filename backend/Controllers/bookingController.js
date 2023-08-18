import Booking from "../models/Booking.js";

export const creatBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "your tour is booked",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const booked = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "your tour is booked",
      data: booked,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const Allbooked = await Booking.find({});
    res.status(200).json({
      success: true,
      message: "your tour is booked.",
      data: Allbooked,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error.",
    });
  }
};
