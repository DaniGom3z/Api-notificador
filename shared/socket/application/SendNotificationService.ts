import { socket } from "../domain/repositories/socket";
import { Notificacion } from "../../../notification/domain/Notificacion";
import { Eventos } from "../domain/entities/Eventos";
import { DatabaseRepository } from "../domain/repositories/Database";
import { token } from "../domain/repositories/token";

export class SendNotificationService {
    private readonly enclosuresMap: Map<number, string> = new Map<number, string>();

    constructor(private readonly socketRepository: socket, private readonly databaseRepository: DatabaseRepository, private readonly tokenRepository : token) {}

    async execute(notification: Notificacion): Promise<void> {
        try {
            const enclosureId: number = notification.enclosureId;
            let token: string | undefined = this.enclosuresMap.get(enclosureId);
            
            if (!token) {
                const userId: number = await this.databaseRepository.getUser(enclosureId);
                token = this.tokenRepository.createToken(userId);
                this.enclosuresMap.set(enclosureId, token);
            }

            await this.socketRepository.notify(Eventos.Enviar_DATA, notification, token);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
