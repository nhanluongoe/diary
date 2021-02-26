import asyncHandler from 'express-async-handler';
import Diary from '../models/diaryModel.js';
import User from '../models/userModel.js';

// @desc Fetech all diaries
// @route GET /api/diaries
// @access Public
const getDiaries = asyncHandler(async (req, res) => {
  const diaries = await Diary.find({});
  // throw new Error('test!');
  res.json(diaries);
});

// @desc    Fetch single diary
// @route   GET /api/diaries/:id
// @access  Public
const getDiaryById = asyncHandler(async (req, res) => {
  const diary = await Diary.findById(req.params.id);

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

  const diary = await Diary.create({
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

// @desc    Update diary
// @route   PUT /api/diaries/:id/edit
// @access  Private
const updateDiary = asyncHandler(async (req, res) => {
  const diary = await Diary.findById(req.params.id);

  const user = await User.findById(req.user._id);

  // if (diary && diary.user !== user._id) {
  //   throw new Error("Uh oh! You're not owner of this diary!");
  // }

  // console.log(diary);
  // console.log(user);
  // console.log(diary.user.toString() === user._id.toString());

  if (diary && diary.user.toString() === user._id.toString()) {
    diary.title = req.body.title || diary.title;
    diary.content = req.body.content || diary.content;

    const updatedDiary = await diary.save();

    res.json({
      _id: updatedDiary._id,
      title: updatedDiary.title,
      content: updatedDiary.content,
    });
  } else {
    res.status(404);
    throw new Error("Diary not found or you don't own this diary!");
  }
});

export { getDiaries, getDiaryById, addDiary, updateDiary };
