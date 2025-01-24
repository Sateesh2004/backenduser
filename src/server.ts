import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import cookieParser from "cookie-parser"
import cors from "cors"
import noteRoutes from "./routes/noteRoutes";
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser())
const allowedOrigins = ['http://localhost:3000'];
app.use(cors(
  {
      origin:allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials:true,

  }
))
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! User');
});
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
