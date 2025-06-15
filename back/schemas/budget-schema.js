import Joi from "joi";

export const budgetSchema = Joi.object({
    name: Joi.string().max(50).required(),
    amount: Joi.number(),
    limit: Joi.number().positive().required(),
    categoryId: Joi.number().integer().required(),
    
});
