import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';

import diariesRoute from './routes/diaryRoutes.js';
import userRoute from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/diaries', diariesRoute);
app.use('/api/users', userRoute);

const __dirname = path.resolve();

console.log(__dirname);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
