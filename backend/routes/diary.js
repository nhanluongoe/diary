import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();

import Diaries from '../models/diary.js';

// @desc    Fetch all diaries
// @route   GET /api/diaries
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const diaries = await Diaries.find({});

    res.json(diaries);
  })
);

// @desc    Fetch single diary
// @route   GET /api/diaries/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const diary = await Diaries.findById(req.params.id);

    if (diary) {
      res.json(diary);
    } else {
      res.status(404);
      throw new Error('Diary not found!');
    }
  })
);

export default router;
