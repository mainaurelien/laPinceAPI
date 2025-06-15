import express from "express";
import cors from "cors";
import helmet from "helmet";

import { syncDB } from "./models/client.js";
import "./models/associations.js";
import { authRouter } from "./routes/auth-routes.js";
import { budgetRouter } from "./routes/budget-routes.js";
import { expensesRouter } from "./routes/expenses-routes.js";
import { notificationsRouter } from "./routes/notifications-routes.js";
import { errorRouter } from "./routes/error-routes.js";
import { categoryRouter } from "./routes/categories-routes.js";
import { seedCategories } from "./seeds/seed-categories.js";



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(authRouter); 
app.use(budgetRouter); 
app.use(expensesRouter); 
app.use(notificationsRouter); 
app.use(errorRouter);
app.use(categoryRouter);


app.get("/", (req, res) => res.send("API La Pince"));

app.listen(PORT, async () => {
    console.log(` Server running on http://localhost${PORT}`);
    await seedCategories();
    await syncDB(); 
  });