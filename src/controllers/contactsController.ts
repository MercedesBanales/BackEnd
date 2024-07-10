import type { Request, Response } from 'express';

export async function createContact(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'Contact created' });

    } catch (error:any) {
        return res.status(500).send({ message: error.message });
    }
}

export async function getContacts(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'Contact created' });

    } catch (error:any) {
        return res.status(500).send({ message: error.message });
    }
}

export async function updateContact(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'Contact created' });

    } catch (error:any) {
        return res.status(500).send({ message: error.message });
    }
}