import { Request, Response } from "express";
import Note from "../models/Note";

// Handler to get a single note for a user
export const getNote = async (req: Request, res: Response): Promise<void> => {
  const userId = req.id; // Extract user ID from request (assuming user is authenticated)
  const notes = await Note.find({ userId }); // Find all notes related to the user
  res.json(notes); // Send the notes as a response
};

// Handler to get all notes
export const getNotes = async (req: Request, res: Response): Promise<void> => {
  const notes = await Note.find(); // Find all notes in the database (not specific to any user)
  res.json(notes); // Send the notes as a response
};

// Handler to create a new note
export const createNote = async (req: Request, res: Response): Promise<void>  => {
  const { title, description } = req.body; // Destructure the title and description from request body
  
  const userId = req.id; // Extract user ID from request (assuming user is authenticated)
  
  const note = new Note({ title, description, userId }); // Create a new Note object
  await note.save(); // Save the note to the database
  
  res.status(201).json({ message: "Note created successfully", note_details: note }); // Respond with success and the note details
  return;
};

// Handler to update an existing note
export const updateNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params; // Get the note ID from request params
  const { title, description } = req.body; // Destructure the title and description from request body
  
  // Find and update the note with the given ID and userId
  const note = await Note.findOneAndUpdate({ _id: id, userId: req.id }, { title, description }, { new: true });
  
  if (!note) {
    res.status(404).json({ error: "Note not found" }); // If the note is not found, return a 404 error
    return;
  }
  
  res.json({ message: "Note updated successfully", note_details: note }); // Respond with success and the updated note details
  return;
};

// Handler to delete a note
export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params; // Get the note ID from request params
  
  // Find and delete the note with the given ID and userId
  const note = await Note.findOneAndDelete({ _id: id, userId: req.id });
  
  if (!note) {
    res.status(404).json({ error: "Note not found" }); // If the note is not found, return a 404 error
    return;
  }
  
  res.status(204).end(); // Respond with a 204 status (no content) after successful deletion
};
