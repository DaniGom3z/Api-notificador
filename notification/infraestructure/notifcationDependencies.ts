import { SocketIORepository } from "../../shared/socket/infraestructure/repository/socket";
import { SMySQLRepository } from "../../shared/socket/infraestructure/repository/mysql";
import { JWTRepository } from "../../shared/socket/infraestructure/repository/jwt";
import { SendNotificationService } from "../../shared/socket/application/SendNotificationService";

import { NotificarService } from "../application/notificarService";

import { notificar } from "./controllers/notificar";

const socketIORepository = new SocketIORepository("http://34.200.180.243:4200/");
const smysqlRepository = new SMySQLRepository();
const jwtRepository = new JWTRepository();

const sendNotificationService = new SendNotificationService(socketIORepository, smysqlRepository, jwtRepository);

const notificarService = new NotificarService( sendNotificationService);

export const notificarController = new notificar(notificarService);
