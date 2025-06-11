import { User } from "./User.js";
import { Expense } from "./Expense.js";
import { Budget } from "./Budget.js";
import { Notification } from "./Notification.js";
import { Category } from "./Category.js";


User.hasMany(Expense, { foreignKey: "userId", onDelete: "CASCADE" });
Expense.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Budget, { foreignKey: "userId", onDelete: "CASCADE" });
Budget.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Notification, { foreignKey: "userId", onDelete: "CASCADE" });
Notification.belongsTo(User, { foreignKey: "userId" });

Budget.hasMany(Expense, { foreignKey: "budgetId", onDelete: "CASCADE" });
Expense.belongsTo(Budget, { foreignKey: "budgetId" });

Category.hasMany(Budget, { foreignKey: "categoryId", onDelete: "CASCADE" });
Budget.belongsTo(Category, { foreignKey: "categoryId" });





export { User, Expense, Budget, Notification, Category };

