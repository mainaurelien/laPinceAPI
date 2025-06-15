
export const errorHandler = (err, req, res, next) => {
    console.error("Erreur attrapée :", err);
  
    if (err.name === "UnauthorizedError") {
      return res.status(401).json({ message: "Token invalide ou expiré." });
    }
  
    if (err.name === "SequelizeValidationError") {
      return res.status(400).json({ message: "Erreur de validation", errors: err.errors });
    }
  
    res.status(500).json({ message: "Erreur interne du serveur." });
  };
  