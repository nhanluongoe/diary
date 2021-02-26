import express from 'express';
const router = express.Router();
import {
  getDiaries,
  getDiaryById,
  addDiary,
  updateDiary,
} from '../controllers/diaryControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

router.route('/').get(getDiaries);

router.route('/:id').get(getDiaryById);

router.route('/new').post(protect, addDiary);

router.route('/:id/edit').put(protect, updateDiary);

export default router;
