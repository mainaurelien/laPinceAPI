import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { validate } from '../middlewares/validate.js';
import { budgetSchema } from '../schemas/budget-schema.js';
import { budgetsController } from '../controllers/budget-controller.js';


const router = express.Router();

router.use(verifyToken);

router.get('/budgets', budgetsController.getAll);
router.post('/budgets', validate(budgetSchema), budgetsController.create);
router.put('/budgets/:id', validate(budgetSchema), budgetsController.update);
router.delete('/budgets/:id', budgetsController.delete);

export const budgetRouter = router;