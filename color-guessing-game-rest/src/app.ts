import express from 'express';
import cors from 'cors';
import {router as UserRouter} from './api/endpoints/v1/user.api.v1';

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/api/v1/user', UserRouter)

export default app;