import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { validate } from '../middlewares/validate.js';
import { budgetSchema } from '../schemas/budget-schema.js';
import { budgetsController } from '../controllers/budget-controller.js';

const router = express.Router();

router.get('/budgets', verifyToken, budgetsController.getAll);
router.post('/budgets', verifyToken, validate(budgetSchema), budgetsController.create);
router.put('/budgets/:id', verifyToken, validate(budgetSchema), budgetsController.update);
router.delete('/budgets/:id', verifyToken, budgetsController.delete);

export const budgetRouter = router;