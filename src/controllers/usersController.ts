import type { Request, Response } from 'express';

export async function getUser(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'User created' });

    } catch (error:any) {
        return res.status(500).send({ message: error.message });
    }
}