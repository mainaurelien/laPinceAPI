import Joi from "joi";

export const notificationSchema = Joi.object({
    
    message: Joi.string().max(500).required(),
    isRead: Joi.boolean().optional(),
});
