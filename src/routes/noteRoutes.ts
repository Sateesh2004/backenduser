import express from "express";
import { createNote, getNote, getNotes, updateNote, deleteNote } from "../controllers/noteController"; // Importing the controller functions for note operations
import authMiddleware from "../middleware/authMiddleware"; // Importing the authentication middleware

// Create a new router instance for handling routes related to notes
const router = express.Router();

// Route to fetch a specific note by the authenticated user (authMiddleware ensures the user is authenticated)
router.get("/", authMiddleware, getNote); // When a GET request is made to /, the getNote controller is called

// Route to fetch all notes (no authentication required for this one)
router.get("/notesreqbyadmin", getNotes); // When a GET request is made to /notesreqbyadmin, the getNotes controller is called

// Route to create a new note (authMiddleware ensures the user is authenticated)
router.post("/", authMiddleware, createNote); // When a POST request is made to /, the createNote controller is called

// Route to update an existing note (authMiddleware ensures the user is authenticated)
router.patch("/:id", authMiddleware, updateNote); // When a PATCH request is made to /:id, the updateNote controller is called

// Route to delete a note (authMiddleware ensures the user is authenticated)
router.delete("/:id", authMiddleware, deleteNote); // When a DELETE request is made to /:id, the deleteNote controller is called

// Export the router to be used in other parts of the application (e.g., app.js)
export default router;
