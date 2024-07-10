import type { Request, Response } from 'express';
import * as contactsService from '../services/contactsService';
import { CreateContactRequest } from '../models/requests/CreateContactRequest';
import { ValidationException } from '../validators/exceptions/validationException';
import { CreateContactResponse } from '../models/responses/CreateContactResponse';

export function createContact(req: Request, res: Response) {
    try {
        const body: CreateContactRequest = req.body;
        const response: CreateContactResponse = contactsService.createContact(body);
        return res.status(200).send(response);
    } catch (error: any ) {
        let code = 500;
        if (error instanceof ValidationException) code = 400;
        return res.status(code).send({ message: error.message });
    }
}

export function getContacts(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'Contact created' });

    } catch (error: any) {
        return res.status(500).send({ message: error.message });
    }
}

export function updateContact(req: Request, res: Response) {
    try {
        return res.status(200).send({ message: 'Contact created' });

    } catch (error:any) {
        return res.status(500).send({ message: error.message });
    }
}