import express from 'express';
import dotenv from 'dotenv';
import noteRoutes from './routes/notesRoutes';
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/notes', noteRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});