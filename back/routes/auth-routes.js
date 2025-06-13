import express from 'express';
import { authcontroller } from '../controllers/auth-controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/register', authcontroller.register);
router.post('/login', authcontroller.login);
router.put('/user', verifyToken, authcontroller.updateUser)
router.delete('/user', verifyToken, authcontroller.deleteUser);
router.get('/user', verifyToken, authcontroller.getUser);

export const authRouter = router;