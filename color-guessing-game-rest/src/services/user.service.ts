import { dbConfig as db } from "../database/db-config";
import bcrypt from 'bcryptjs';
import { v4 as uuid} from 'uuid';

export { getUsers, createNewUser }

function getUsers() {
    return db('user')
        .select();
}

function getUserById(id: number) {
    return db('user')
        .select('id', 'firstName', 'lastName', 'primaryEmail', 'token', 'createdOn')
        .where('id', id)
        .first()
}

async function createNewUser(user: any) {
    if(user.password) {
        user.password = bcrypt.hashSync(user.password, 8);
    }
    user.token = uuid();
    const [id] = await db('user')
        .insert(user, 'id')
    return getUserById(id);
}