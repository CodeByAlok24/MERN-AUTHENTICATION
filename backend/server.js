import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const PORT = process.env.PORT ||  5000;

const app = express();

app.use(express.json());// tells express to automatically parse json data


app.use("/api/users", authRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});
