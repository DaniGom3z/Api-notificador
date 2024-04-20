import { SendNotificationService } from "../../shared/socket/application/SendNotificationService";
import { Notificacion } from "../domain/Notificacion";

export class NotificarService {
    constructor( 
        private readonly sendNotificationService: SendNotificationService,
    ) {}
    async execute(parameters: Notificacion): Promise<void> {
        try {
            await this.sendNotificationService.execute(parameters);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}