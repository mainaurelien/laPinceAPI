import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client.js";

export class User extends Model{};


User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
    timestamps: true,  // Ajoute `createdAt` et `updatedAt`
});
