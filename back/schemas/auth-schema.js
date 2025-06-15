import Joi from "joi";

// Schéma de validation pour l'inscription
export const registerSchema = Joi.object({              
    email: Joi.string().email().required(),            
    password: Joi.string()
  .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,50}$')) //(?=.*[A-Za-z]) : au moins une lettre, (?=.*\d) : au moins un chiffre, [A-Za-z\d]{6,50} : autorise uniquement lettres et chiffres, et impose une longueur entre 6 et 50
  .required()
  .messages({
    'string.pattern.base': 'Le mot de passe doit contenir au moins une lettre et un chiffre, et faire entre 6 et 50 caractères.',
    'string.empty': 'Le mot de passe est requis.',
  }),
});

// Schéma de validation pour la connexion
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
