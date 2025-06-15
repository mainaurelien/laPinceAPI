import { Expense, Budget, User } from "../models/associations.js";

export const expensesController = {

    async getAll(req,res) {
        try {
            const expense = await Expense.findAll({ where: { userId: req.user.userId }});
            res.status(200).json(expense);
        } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des dépenses', error: err.message });
        }
    },

    async getBudget(req, res) {
        try{
            const budgetId = req.params.budgetId;
            const expenses = await Expense.findAll({
                where: { budgetId, userId: req.user.userId },
                order: [['createdAt', 'DESC']]
              });
            res.status(200).json(expenses);
        } catch (err) {
            res.status(500).json({ message: 'Erreur lors de la récupération des dépenses du budget', error: err.message });
        }
    },

    async create(req, res) {
        try {
            const amount = parseFloat(req.body.amount);
            const description = req.body.description;
            const budgetId = req.body.budgetId;
            const userId = req.user.userId;
            const date = new Date();

            const budget = await Budget.findOne({
                where: { id: budgetId, userId: userId },
                include: [Expense],
              });

            if (!budget) {
                return res.status(404).json({ message: "Budget non trouvé "});
            }
            const totalDepenses = budget.Expenses.reduce((acc, e) => acc + e.amount, 0);

            if (totalDepenses + amount > budget.limit) {
                return res.status(400).json({ message: "Cette dépense dépasse la limite du budget !" });
              }

            const newExpense = await Expense.create({
                amount: amount,
                description: description,
                budgetId: budgetId,
                userId: req.user.userId,
                createdAt: date
            });

                                                                
            res.status(201).json(newExpense);
        } catch (err) {
            res.status(500).json({ message: 'Erreur serveur', error: err.message });
        }
    }, 

    async update(req, res) {
        try {
  
            const expenseId = req.params.id; 
            const userId = req.user.userId; 
    
            
            const expense = await Expense.findOne({ where: { id: expenseId, userId: userId } });
    
            if (!expense) {
                return res.status(404).json({ message: "Dépense non trouvée ou accès refusé" });
            }
    
            
            const updateFields = {};

            if (req.body.amount !== undefined) {
            updateFields.amount = req.body.amount;
            }

            if (req.body.description !== undefined) {
            updateFields.description = req.body.description;
            }

            await expense.update(updateFields); 
    
            res.status(200).json({ message: "Dépense mise à jour avec succès", expense });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const expenseId = req.params.id; 
            const userId = req.user.userId; 
    
            
            const expense = await Expense.findOne({ where: { id: expenseId, userId: userId } });
    
            if (!expense) {
                return res.status(404).json({ message: "Dépense non trouvée ou accès refusé" });
            }
    
            
            await expense.destroy();
    
            res.status(200).json({ message: "Dépense supprimée avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    }
    
    
};
