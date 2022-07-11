import express from "express";
import { getUsers, createNewUser } from "../../../services/user.service";

export const router = express.Router()

router.get('/', async (req : any, res : any)=> {
    try {
        const users = await getUsers();
        res.status(200).json(users);

    } catch (err) {
        console.error(err);
    }
})

router.post('/', async (req: any, res: any)=> {
    try {
        const userData = req.body
        const newUser = await createNewUser(userData);
        res.status(201).json(newUser)
    } catch (err) {
        console.error(err);
    }
})

