import mongoose, { Document, Model } from "mongoose";

export interface INote extends Document {
  title: string;
  description: string;
  userId: mongoose.Types.ObjectId;
}

const noteSchema = new mongoose.Schema<INote>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}
);
const Note: Model<INote> = mongoose.model<INote>("Note", noteSchema);


export default Note















