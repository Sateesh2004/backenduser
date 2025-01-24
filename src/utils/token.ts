import { Request, Response } from "express";
import jwt from "jsonwebtoken"; // Import jwt for generating tokens

import { IUser } from "../models/User"; // Import IUser type definition for user data model

// Function to generate a token for the user and set it as an HTTP-only cookie
const generateToken = (res: Response, user: IUser) => {
  try {
    // Generate JWT token with user data (id, username, role), using a secret key and an expiration time of 10 days
    const token = jwt.sign(
      { id: user._id, username: user.email, role: user.role },
      process.env.SECRET_KEY!, // Access the secret key from environment variables
      { expiresIn: '10d' } // Token expiration time set to 10 days
    );

    // Set the generated token as an HTTP-only cookie to ensure it can't be accessed via JavaScript
    res.cookie("token", token, {
      httpOnly: true,  // Prevent access to cookie via JavaScript
      secure: true,    // Ensure cookie is only sent over HTTPS (for secure connections)
      sameSite: 'strict' // Prevent the cookie from being sent along with cross-site requests
    });

    // Return a success response with the user details, excluding the password
    return res.status(200).json({
      message: "User signed in successfully",
      username: user.name,
      email: user.email,
      role: user.role
    });
  } catch (err: unknown) {
    // Error handling for any issues during token generation
    if (err instanceof Error) {
      res.status(400).json({ error: err.message }); // Send error message if error is an instance of Error
    } else {
      res.status(400).json({ error: "An unknown error occurred" }); // Fallback for unknown errors
    }
  }
};

export default generateToken;
