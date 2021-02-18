import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import diaries from './data/diaries.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/diaries', (req, res) => {
  res.json(diaries);
});

app.get('/api/diaries/:id', (req, res) => {
  const diary = diaries.find((d) => d._id === req.params.id);
  res.json(diary);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
