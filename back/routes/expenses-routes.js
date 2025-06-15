import express from 'express';
import { expensesController } from '../controllers/expenses-controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { validate } from '../middlewares/validate.js';
import { expenseSchema } from "../schemas/expense-schema.js";

const router = express.Router();

router.get('/expenses', verifyToken, expensesController.getAll);
router.get('/budgets/:budgetId/expenses', verifyToken, expensesController.getBudget);
router.post('/expenses', verifyToken, validate(expenseSchema), expensesController.create);
router.put('/expenses/:id', verifyToken, validate(expenseSchema), expensesController.update);
router.delete('/expenses/:id', verifyToken, expensesController.delete);


export const expensesRouter = router;

