const express = require('express');
const diaries = require('./data/diaries');

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

app.listen(5000, console.log('Server running on 5000'));
