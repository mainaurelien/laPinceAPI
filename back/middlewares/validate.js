export const validate = (schema) => (req, res, next) => {
    const validationResult = schema.validate(req.body, { abortEarly: false }); // signifie que Joi va continuer à valider tous les champs, même s'il trouve des erreurs, plutôt que d'arrêter après la première erreur. Cela permet de renvoyer toutes les erreurs de validation en une seule fois.

    if (validationResult.error) {
        const messages = validationResult.error.details.map(err => err.message);
        return res.status(400).json({ message: messages });
    }
    
    next();
};