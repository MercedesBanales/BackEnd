import type { Request, Response } from 'express';
import * as contactsService from '../services/contactsService';
import { CreateContactRequest } from '../models/requests/CreateContactRequest';
import { ValidationException } from '../validators/exceptions/validationException';
import { CreateContactResponse } from '../models/responses/CreateContactResponse';
import { ListContactsResponse } from '../models/responses/ListContactsResponse';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { UpdateContactRequest } from '../models/requests/UpdateContactRequest';

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
        const response: ListContactsResponse = contactsService.getContacts();
        return res.status(200).send({ response });

    } catch (error: any) {
        return res.status(500).send({ message: error.message });
    }
}

export function updateContact(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const body: UpdateContactRequest = req.body;
        const response = contactsService.updateContact(id, body);
        return res.status(200).send({ response });

    } catch (error:any) {
        let code=500;
        if (error instanceof ValidationException) code=400;
        if (error instanceof NotFoundException) code=404;
        return res.status(code).send({ message: error.message });
    }
}