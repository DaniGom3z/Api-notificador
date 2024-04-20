import { token } from "../../domain/repositories/token";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export class JWTRepository implements token {
    createToken(userId: number) : string {
        const token = jwt.sign({ userId: userId }, 'clavecita', {
            expiresIn: 32400000
        });
        return token;
    }
}