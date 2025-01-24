import mongoose, { Document, Model } from "mongoose";

// Define the IUser interface extending Mongoose's Document
export interface IUser extends Document {
  name: string;          // User's name
  email: string;         // User's email (unique)
  password: string;      // User's password
  role: string;          // Role of the user (default is "user")
}

// Define the user schema
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true }, // Name field (mandatory)
    email: { type: String, required: true, unique: true }, // Email field (mandatory, unique)
    password: { type: String, required: true }, // Password field (mandatory)
    role: { type: String, default: "user" }, // Role field (default is "user")
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
