import express from 'express';
import { authController } from '../controllers/auth-controller.js';
import { validate } from '../middlewares/validate.js';
import { registerSchema, loginSchema } from '../schemas/auth-schema.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router()

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.get('/user', verifyToken, authController.getUser);
router.put('/user', verifyToken, validate(registerSchema), authController.updateUser);
router.delete('/user', verifyToken, authController.deleteUser);

export const authRouter = router;