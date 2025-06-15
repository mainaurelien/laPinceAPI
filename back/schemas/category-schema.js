import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string().max(50).required(),
    userId: Joi.number().integer().required(),
});
