import express from 'express';
import { studentCourseContentController, getEnrolledCoursesController } from './controller';
const router = express.Router();


router.get('/student_course_content', studentCourseContentController);
router.get('/enrolled_courses/:studentId', getEnrolledCoursesController);

export const studentRoutes = router;


