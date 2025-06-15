import Joi from "joi";

// Schéma de validation pour l'inscription
export const registerSchema = Joi.object({              // cree un nouvel objet de validation qui definit les regles
    name: Joi.string().min(3).max(30).required(),       // la valeur doit etre une string de lomgueur min de 3 et max de 30, .required() // champ obligatoire
    email: Joi.string().email().required(),            // doit correspondre au format email valide
    password: Joi.string().min(6).max(50).required(),
});

// Schéma de validation pour la connexion
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
