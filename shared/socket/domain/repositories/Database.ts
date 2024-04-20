export interface DatabaseRepository {
    getUser(enclosureId: number) : Promise<number>;
}