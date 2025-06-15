import express from "express";
import { errorController } from "../controllers/error-controller.js";


const router = express.Router();

router.post("/error", errorController.handleError);


export const errorRouter = router;
