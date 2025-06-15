import express from 'express';
import { expensesController } from '../controllers/expenses-controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { validate } from '../middlewares/validate.js';
import { expenseSchema } from "../schemas/expense-schema.js";



const router = express.Router();

router.use(verifyToken);

router.get('/expenses', expensesController.getAll);
router.get('/budgets/:budgetId/expenses', expensesController.getBudget);
router.post('/expenses', validate(expenseSchema), expensesController.create);
router.put('/expenses/:id', validate(expenseSchema), expensesController.update);
router.delete('/expenses/:id', expensesController.delete);


export const expensesRouter = router;

