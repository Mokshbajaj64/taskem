import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.route';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contact', contactRouter);

dotenv.config({
  path: './config.env',
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URL as string, () => {
    console.log('Connected');
  });
});
