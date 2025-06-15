import express from "express";
import cors from "cors";
import helmet from "helmet";

import { syncDB } from "./models/client.js";
import "./models/associations.js";
import { authRouter } from "./routes/auth-routes.js";
import { budgetRouter } from "./routes/budget-routes.js";
import { expensesRouter } from "./routes/expenses-routes.js";
import { notificationsRouter } from "./routes/notifications-routes.js";
import { categoryRouter } from "./routes/categories-routes.js";
import { seedCategories } from "./seeds/seed-categories.js";
import { errorHandler } from "./middlewares/error-handler.js";




const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api',authRouter); 
app.use('/api',budgetRouter); 
app.use('/api',expensesRouter); 
app.use('/api',notificationsRouter); 
app.use('/api',categoryRouter);
app.use(errorHandler); 



app.get("/", (req, res) => res.send("API La Pince"));

app.listen(PORT, async () => {
    console.log(` Server running on http://localhost${PORT}`);
    await syncDB(); 
    await seedCategories();
  });