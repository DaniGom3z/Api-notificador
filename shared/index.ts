import { notificationRouter } from "../notification/infraestructure/notifcationRoutes";
import { Router } from "express";

export const index = Router();

index.use('/notification', notificationRouter); 