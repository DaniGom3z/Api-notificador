import { ConnectionOptions } from "mysql2";
import { config } from "dotenv";

config();

export const databaseConfig: ConnectionOptions = {
    host: 'apimulti.crsomqkaqd5t.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'danigomez123',
    database: 'multi'
}