import 'dotenv/config';
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => res.send("API La Pince"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));