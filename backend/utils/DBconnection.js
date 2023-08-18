import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName: "Tour-Management",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection established");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
