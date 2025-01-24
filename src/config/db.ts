import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    
  }
};

export default connectDB;
