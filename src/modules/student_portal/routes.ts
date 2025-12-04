import express from 'express';
import { studentCourseContentController } from './controller';
const router = express.Router();


router.get('/student_course_content', studentCourseContentController);

export const studentRoutes = router;


