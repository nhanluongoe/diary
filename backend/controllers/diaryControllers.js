import asyncHandler from 'express-async-handler';
import Diaries from '../models/diaryModel.js';
import User from '../models/userModel.js';

// @desc Fetech all diaries
// @route GET /api/diaries
// @access Public
const getDiaries = asyncHandler(async (req, res) => {
  const diaries = await Diaries.find({});
  // throw new Error('test!');
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

// @desc    Add a new diary
// @route   POST /api/diaries/new
// @access  Private
const addDiary = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const user = await User.findById(req.user._id);

  const diary = await Diaries.create({
    title,
    content,
    user: user._id,
  });

  if (diary) {
    res.status(201).json({
      _id: diary._id,
      title: diary.title,
      content: diary.content,
      user: user._id,
    });
  } else {
    res.status(400);
    throw new Error('Invalid diary data!');
  }
});

export { getDiaries, getDiaryById, addDiary };
