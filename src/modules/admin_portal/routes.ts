import express from 'express';
import { courseCreateController, batchCreateController, moduleCreateController,  lessonCreateController, courseEnrollController} from './controller';
const router = express.Router();


router.post('/courses_create', courseCreateController);
router.post('/batches_create', batchCreateController);
router.post('/modules_create', moduleCreateController);
router.post('/lessons_create', lessonCreateController);
router.post('/course_enroll', courseEnrollController);

export const adminRoutes = router;