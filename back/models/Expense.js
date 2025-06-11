import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client.js";

export class Expense extends Model{};


Expense.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    budgetId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'expenses',
    timestamps: true,  // Ajoute `createdAt` et `updatedAt`
});