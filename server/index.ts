import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.route';
import userRouter from './routes/user.route';
import projectRouter from './routes/project.route';
import tagRouter from './routes/tag.route';
import taskRouter from './routes/task.route';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contact', contactRouter);
app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);
app.use('/api/tag', tagRouter);
app.use('/api/task', taskRouter);

dotenv.config({
  path: './config.env',
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URL as string, () => {
    console.log('Connected');
  });
});
