import express from "express";
import { createNote,getNote,getNotes, updateNote,deleteNote} from "../controllers/noteController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();


router.get("/",authMiddleware,getNote);
router.get("/notesbyadmin",getNotes);
router.post("/create",authMiddleware, createNote);
router.patch("/:id",authMiddleware, updateNote);
router.delete("/:id",authMiddleware, deleteNote);

export default router;
