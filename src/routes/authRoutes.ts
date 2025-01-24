import express from "express";
import { register, login } from "../controllers/authController"; // Importing register and login controller functions

// Create a new instance of an Express router
const router = express.Router();

// POST request for registering a new user
router.post("/register", register); // Calls the 'register' function from authController when a POST request is made to '/register'

// POST request for logging in an existing user
router.post("/login", login); // Calls the 'login' function from authController when a POST request is made to '/login'

// Export the router so it can be used in the main application file
export default router;
