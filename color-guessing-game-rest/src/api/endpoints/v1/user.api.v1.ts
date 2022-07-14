import express from "express";
import { getUsers, createNewUser, login } from "../../../services/user.service";

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

router.post('/login' ,async (req: any, res: any)=> {
    try {
        // const result : Model.User.User = await login(req.body);
        const result : any = await login(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({
            message: 'There was an error logging in. Check if username and password are correct'
        })
        console.error(err)
    }
})
