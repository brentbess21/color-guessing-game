import { dbConfig as db } from "../database/db-config";
import bcrypt from 'bcryptjs';
import { v4 as uuid} from 'uuid';

export { getUsers, createNewUser, login }

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

async function findUserByEmail(email: any) {
    try {
        const user = await db('user')
            .select('*')
            .where('primaryEmail', email)
            .first()
        return user
    } catch (err) {
        console.error(err)
    }
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

// async function login(loginData: Model.User.LoginData) {
async function login(loginData: any) {
    // const correctUserId : Model.User.User['id'] = await auth(loginData);
    const correctUserId : any = await auth(loginData);
    return getUserById(correctUserId);

}

// async function auth(loginData: Model.User.LoginData) {
async function auth(loginData: any) {
    if(!loginData) {
        console.error('Incorrect email or password')
    }
    try {
        const correctUser: any = await findUserByEmail(loginData.email)
        if( bcrypt.compareSync(loginData.password, correctUser.password)) {
            return correctUser.id
        }
    } catch(err) {
        console.error(err)
    }
}