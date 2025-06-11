import express from "express";
import cors from "cors";
import helmet from "helmet";

import { syncDB } from "./models/client.js";
import "./models/associations.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => res.send("API La Pince"));

app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    await syncDB(); 
  });