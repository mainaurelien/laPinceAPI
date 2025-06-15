import express from "express";
import { categoryController } from "../controllers/categories-controller.js";

const router = express.Router();

router.get("/categories", categoryController.getAll);

export const categoryRouter = router;
