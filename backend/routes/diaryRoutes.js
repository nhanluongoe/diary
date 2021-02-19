import express from 'express';
const router = express.Router();
import { getDiaries, getDiaryById } from '../controllers/diaryControllers.js';

router.route('/').get(getDiaries);

router.route('/:id').get(getDiaryById);

export default router;
