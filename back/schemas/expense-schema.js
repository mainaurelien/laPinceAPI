import Joi from "joi";

export const expenseSchema = Joi.object({
    amount: Joi.number().positive().required(),
    description: Joi.string().max(500).optional(),
    budgetId: Joi.number().integer().optional(),
});
