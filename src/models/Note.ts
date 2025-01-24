import mongoose, { Document, Model } from "mongoose";

// Interface for the Note document
export interface INote extends Document {
  title: string;         // Title of the note
  description: string;   // Description of the note
  userId: mongoose.Types.ObjectId; // Reference to the user who created the note
}

// Schema definition for the Note model
const noteSchema = new mongoose.Schema<INote>({
  title: { type: String, required: true }, // Title field (mandatory)
  description: { type: String, required: true }, // Description field (mandatory)
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model (mandatory)
}
);

// Model definition for the Note schema
const Note: Model<INote> = mongoose.model<INote>("Note", noteSchema);

// Exporting the Note model
export default Note;
