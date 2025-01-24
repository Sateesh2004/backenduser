import { Request, Response } from "express";
import Note from "../models/Note";

export const getNote = async (req: Request, res: Response): Promise<void> => {
  const userId = req.id;
  const notes = await Note.find({ userId });
  res.json(notes);
};
export const getNotes = async (req: Request, res: Response): Promise<void> => {
  
  const notes = await Note.find();
  res.json(notes);
};

export const createNote = async (req: Request, res: Response): Promise<void>  => {
  const { title, description } = req.body;
     
     
     
  const userId = req.id;
  const note = new Note({ title, description, userId });
  await note.save();
  res.status(201).json(note);

  return;
};

export const updateNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description } = req.body;
  const note = await Note.findOneAndUpdate({ _id: id, userId: req.id }, { title, description }, { new: true });
  if (!note) {res.status(404).json({ error: "Note not found" })
    return;}
  res.json(note);
  return;
};

export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const note = await Note.findOneAndDelete({ _id: id, userId: req.id });
  if (!note) { res.status(404).json({ error: "Note not found" });
return;}
  res.status(204).end();
};
