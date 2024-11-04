import express from 'express';
import { addNote, deleteNote, getAllNotes, getNote, updateNote } from '../controllers/notesController';

const routes = express.Router();

routes.get('/', getAllNotes);
routes.get('/:id', getNote);
routes.post('/', addNote);
routes.put('/:id', updateNote);
routes.delete('/:id', deleteNote);

export default routes;