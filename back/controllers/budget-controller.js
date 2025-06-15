import { Budget, Category, Expense } from "../models/associations.js";


export const budgetsController = {

    async getAll(req, res) {
        try {
          const budgets = await Budget.findAll({
            where: { userId: req.user.userId },
            include: [
              { model: Expense }, // On récupère toutes les dépenses associées
              { model: Category, attributes: ["name"] }
            ],
            order: [["createdAt", "DESC"]]
          });
      
          // Calcul du total pour chaque budget
          const budgetsWithTotal = budgets.map(budget => {
            const totalSpent = budget.Expenses.reduce((sum, expense) => {
              return sum + parseFloat(expense.amount);
            }, 0);
      
            const budgetData = budget.toJSON(); // Convertir l'objet Sequelize en objet JS
            return {
              ...budgetData,//toutes les propriétés d’origine 
              totalSpent: totalSpent.toFixed(2) // arrondi a 2DECIMALES
            };
          });
      
          res.json(budgetsWithTotal);
      
        } catch (err) {
          console.error("Erreur getAll budgets :", err);
          res.status(500).json({ message: "Erreur serveur" });
        }
      },
      
    async create(req, res) {
        try { 

        if (!req.user || !req.user.userId) {
            return res.status(401).json({ message: "Utilisateur non authentifié." });
        }
            const userId = req.user.userId;
            const name = req.body.name;
            const limit = req.body.limit;
            const categoryId = req.body.categoryId;
            const newBudget = await Budget.create({
                name: name,
                limit: limit,
                amount: 0,
                categoryId: categoryId,
                userId: userId
            });
            res.status(201).json(newBudget);
        } catch (err) {
            res.status(500).json({ message: 'Erreur serveur', error: err.message });
        }
    },

    async update(req, res) {
        try {
            const budgetId = req.params.id;
            const budget = await Budget.findByPk(budgetId);
            if (!budget) {
                return res.status(404).json({ message: 'Budget non trouvé '});
            }
            if (budget.userId !== req.user.userId) {
                return res.status(403).json({ message: 'Non autorisé '});
            }
            const updateData = {
                name: req.body.name,
                amount: req.body.amount,
                limit: req.body.limit
            };
            await budget.update(updateData);
            res.status(200).json({ message: 'Budget mis à jour'});
        } catch (err) {
            res.status(500).json({ message: 'Erreur serveur', error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const budgetId = req.params.id;
            const budget = await Budget.findByPk(budgetId);

            if (!budget) {
                return res.status(404).json({ message: 'Budget non trouvé' });
            }

            if (budget.userId !== req.user.userId) {
                return res.status(403).json({ message: 'Non autorisé' });
            }

            await budget.destroy();
            res.status(200).json({ message: 'Budget supprimé' });
        } catch (err) {
            res.status(500).json({ message: 'Erreur serveur', error: err.message });
        }
    }

};




