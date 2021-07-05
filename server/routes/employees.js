import express from 'express';
import { getData, createTask, createReport } from '../controllers/employees.js';

const router = express.Router();

router.get('/', getData);
router.post('/createTask', createTask)
router.post('/createReport', createReport)

export default router