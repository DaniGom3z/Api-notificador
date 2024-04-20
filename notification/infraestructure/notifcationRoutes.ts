import { Router } from "express";
import { notificarController } from "./notifcationDependencies";

export const notificationRouter = Router();

notificationRouter.post("/", notificarController.execute.bind(notificarController));
