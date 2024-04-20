import { Eventos } from "../entities/Eventos";
import { Notification } from "../../../../notification/domain/Notificacion";

export interface socket {
    connect(token: string): Promise<any>;
    notify(event: Eventos, notification: Notification, token: string): Promise<void>;
}