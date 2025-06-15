import express from "express";
import { notificationsController } from "../controllers/notifications-controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { validate } from '../middlewares/validate.js';
import { notificationSchema } from "../schemas/notification-schema.js";

const router = express.Router();

router.get("/notifications", verifyToken, notificationsController.getAll);
router.post("/notifications", verifyToken, validate(notificationSchema), notificationsController.create);
router.put("/notifications/:id", verifyToken, validate(notificationSchema), notificationsController.update);
router.delete("/notifications/:id", verifyToken, notificationsController.delete);
router.put('/notifications/:id/read', verifyToken, notificationsController.markAsRead);


export const notificationsRouter = router;
