import mongoose, { Document, Model } from "mongoose";

// Define the IUser interface extending Mongoose's Document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  
}

// Define the user schema
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String,default: "user" },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);



// Create and export the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
