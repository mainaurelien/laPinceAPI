import express from "express";
import { notificationsController } from "../controllers/notifications-controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { validate } from '../middlewares/validate.js';
import { notificationSchema } from "../schemas/notification-schema.js";



const router = express.Router();


router.use(verifyToken);

router.get("/notifications", notificationsController.getAll);
router.post("/notifications", validate(notificationSchema), notificationsController.create);
router.put("/notifications/:id", validate(notificationSchema), notificationsController.update);
router.delete("/notifications/:id", notificationsController.delete);
router.put('/notifications/:id/read', notificationsController.markAsRead);


export const notificationsRouter = router;
