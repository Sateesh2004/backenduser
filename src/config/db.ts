import mongoose from "mongoose";

// Function to connect to the database
const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URL!); 
    console.log("Database connected successfully"); // Log a success message once connected
  } catch (error) {
    // Catch any errors and log them
    console.error("Error connecting to the database:", error);
  }
};

// Export the connectDB function for use in other parts of the application
export default connectDB;
