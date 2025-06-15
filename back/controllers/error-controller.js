export const errorController = {
    handleError: (req, res) => {
        const error = req.body.error; 

        if (!error) {
            return res.status(400).json({ message: "Erreur non spécifiée" });
        }

        console.error("Erreur détectée :", error);

        // Vérification des erreurs d'authentification
        if (error === "auth_failed") {
            return res.status(401).json({ message: "Échec de l'authentification" });
        }

        // Vérification des erreurs de validation
        if (error === "validation_error") {
            return res.status(400).json({ message: "Données invalides" });
        }

        // Erreur serveur par défaut
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
};
