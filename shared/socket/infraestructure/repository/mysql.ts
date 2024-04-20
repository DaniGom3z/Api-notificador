import { db } from '../../../database/application/connection';
import { DatabaseRepository } from '../../domain/repositories/Database';

export class SMySQLRepository implements DatabaseRepository {
    async getUser(enclosureId: number): Promise<number> {
        try {
            const query = 'SELECT e.id FROM Enclosure AS e INNER JOIN User as u ON e.userId = u.id WHERE e.id = ? LIMIT 1';
            const [row] : any = await db.execute(query, [enclosureId]);
            return row[0].id;
        } catch (error : any) {
            throw new Error(error.message);
        }
    }
}
