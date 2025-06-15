import "dotenv/config";
import { Category } from "../models/associations.js";

export const seedCategories = async () => {
    try {
        const count = await Category.count(); // Compte les catégories existantes

        if (count > 0) {
            
            return;
        }

        await Category.bulkCreate([
            { name: "Alimentation" },
            { name: "Transport" },
            { name: "Loisirs" },
            { name: "Santé" },
            { name: "Éducation" },
            { name: "Voyages" },
        ]);

        console.log("Categories seeded successfully.");
    } catch (error) {
        console.error("Error seeding categories:", error);
    }
};
