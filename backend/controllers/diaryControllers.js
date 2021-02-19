import asyncHandler from 'express-async-handler';
import Diaries from '../models/diary.js';

// @desc Fetech all diaries
// @route GET /api/diaries
// @access Public
const getDiaries = asyncHandler(async (req, res) => {
  const diaries = await Diaries.find({});

  res.json(diaries);
});

// @desc    Fetch single diary
// @route   GET /api/diaries/:id
// @access  Public
const getDiaryById = asyncHandler(async (req, res) => {
  const diary = await Diaries.findById(req.params.id);

  if (diary) {
    res.json(diary);
  } else {
    res.status(404);
    throw new Error('Diary not found!');
  }
});

export { getDiaries, getDiaryById };
