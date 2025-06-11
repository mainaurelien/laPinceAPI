import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client.js";

export class Notification extends Model {}

Notification.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    tableName: 'notifications',
    timestamps: true,
});
