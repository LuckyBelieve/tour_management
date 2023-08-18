import User from "../models/User.js";

//create a new User

export const CreateUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "successfully created a new User",
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to create a new User: ",
    });
  }
};

// delete a User

export const DeleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully deleted the User",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to delete User: ",
    });
  }
};

// getAll a User
export const getAllUser = async (req, res) => {
  try {
    const AllUsers = await User.find({})

    res.status(200).json({
      success: true,
      message: "successfully got all the Users",
      data: AllUsers,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "failed to fetch all the Users",
      data: AllUsers,
    });
  }
};

// update a User

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully created a new User",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to update User: ",
    });
  }
};

// getSingle a User

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleUser = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "successfully got the User",
      data: getSingleUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to get a User: ",
    });
  }
};
