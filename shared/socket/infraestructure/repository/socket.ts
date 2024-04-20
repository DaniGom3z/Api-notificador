import { socket } from "../../domain/repositories/socket";
import { Eventos } from "../../domain/entities/Eventos";
import { Notificacion } from "../../../../notification/domain/Notificacion";
import { Socket, io } from "socket.io-client";

export class SocketIORepository implements socket {
    private readonly sockets: Map<string, Socket> = new Map<string, Socket>();

    constructor(private readonly url: string) {}

    async connect(token: string): Promise<Socket> {
        return new Promise<Socket>((resolve, reject) => {
            try {
                if (this.sockets.has(token)) {
                    resolve(this.sockets.get(token)!);
                } else {
                    const socket = io(this.url, {
                        auth: {
                            token: token,
                            offset: undefined,
                        },
                    });
                    this.sockets.set(token, socket);
                    resolve(socket);
                }
            } catch (error: any) {
                reject(error);
            }
        });
    }

    async notify(eventEmit: Eventos, notification: Notificacion, token: string): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const socket = await this.connect(token);
                socket.on('connect', () => {
                    console.log(socket.id);
                });
                socket.emit(eventEmit, notification);
                resolve();
            } catch (error: any) {
                reject(error);
            }
        });
    }
}
