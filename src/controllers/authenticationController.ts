import { Request, Response } from 'express';

export async function login(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'Logged in' });

    } catch (error:any) {
        return res.status(500).send({ message: error.message });
    }
}