import express from "express";
import cors from "cors";
import helmet from "helmet";

import { syncDB } from "./models/client.js";
import "./models/associations.js";
import { authRouter } from "./routes/auth-routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(authRouter);

app.get("/", (req, res) => res.send("API La Pince"));

app.listen(PORT, async () => {
    console.log(` Server running on http://localhost${PORT}`);
    await syncDB(); 
  });