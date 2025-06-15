import { Category } from "../models/associations.js";

export const categoryController = {
  async getAll(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};
