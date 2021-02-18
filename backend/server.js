import express from 'express';
import dotenv from 'dotenv';
import diaries from './data/diaries.js';

dotenv.config();

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
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
