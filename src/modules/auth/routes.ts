import expres from 'express';
import { registerUser, loginUser } from './controller';
const router = expres.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);


export const authRoutes = router;