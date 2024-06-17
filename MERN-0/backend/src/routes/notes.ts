import express  from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

router.get("/", NotesController.getNotes); //reads files

router.get("/:noteId", NotesController.getNote); //reads a specific file

router.post("/", NotesController.createNote); //adds file

router.patch("/:noteId", NotesController.updateNote); //updates file

router.delete("/:noteId", NotesController.deleteNote);

export default router;