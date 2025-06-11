import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client.js";


export class Budget extends Model {}

Budget.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    limit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    categoryId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'budgets',
    timestamps: true,
});
