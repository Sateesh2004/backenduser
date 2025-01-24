import { Request, Response } from "express";
import bcrypt from "bcryptjs"; // For hashing and comparing passwords
import User from "../models/User"; // User model for database operations
import generateToken from "../utils/token"; // Utility function to generate JWT tokens

// Register a new user
export const register = async (req: Request, res: Response): Promise<any> => {
    try {
        // Destructure input data from the request body
        const { name, email, password, password_cofirmation } = req.body;

        // Check if password and password confirmation match
        if (password !== password_cofirmation) {
            return res.status(400).json({ message: "Password Does not match." });
        }

        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format." });
        }

        // Validate password strength using regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.",
            });
        }

        // Check if the user already exists in the database
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(409).json({ message: "User exist" });
        }

        // Hash the user's password
        const hashedpassword = await bcrypt.hash(password, 8);

        // Create a new user instance
        const user = new User({
            name,
            email,
            password: hashedpassword,
        });

        // Save the new user to the database
        await user.save();

        // Send success response
        res.status(201).json({ message: "User registered successfully" });
    } catch (err: unknown) {
        // Handle errors
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: "An unknown error occurred" });
        }
    }
};

// Login an existing user
export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        // Destructure input data from the request body
        const { email, password } = req.body;

        // Check if the user exists in the database
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found." });
        }

        // Compare the provided password with the hashed password in the database
        const ispasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!ispasswordValid) {
            return res.status(400).json({ message: "Password Invalid." });
        }

        // Generate and send a JWT token in the response
        generateToken(res, existingUser);
    } catch (err: unknown) {
        // Handle errors
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: "An unknown error occurred" });
        }
    }
};
