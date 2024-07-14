import type { Response } from 'express';
import * as contactsService from '../services/contactsService';
import { CreateContactRequest } from '../apiModels/requests/CreateContactRequest';
import { ValidationException } from '../validators/exceptions/validationException';
import { CreateContactResponse } from '../apiModels/responses/CreateContactResponse';
import { ListContactsResponse } from '../apiModels/responses/ListContactsResponse';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { UpdateContactRequest } from '../apiModels/requests/UpdateContactRequest';
import { UserRequest } from '../apiModels/requests/UserRequest';

export async function createContact(req: UserRequest, res: Response) {
    try {
        const body: CreateContactRequest = { ...req.body, imagePath: req.file?.filename}
        const user_id = req.id!;
        const response: CreateContactResponse = await contactsService.createContact(user_id, body);
        return res.status(200).send(response);
    } catch (error: any ) {
        let code = 500;
        if (error instanceof ValidationException) code = 400;
        return res.status(code).send({ message: error.message });
    }
}

export async function getContacts(req: UserRequest, res: Response) {
    try {
        const user_id = req.id!;
        const response: ListContactsResponse = await contactsService.getContacts(user_id);
        return res.status(200).send({ response });
    } catch (error: any) {
        return res.status(500).send({ message: error.message });
    }
}

export async function updateContact(req: UserRequest, res: Response) {
    try {
        const contact_id = req.params.id;
        const user_id = req.id!;
        const body: UpdateContactRequest = req.body;
        if (req.file) body.imagePath = req.file.filename;
        const response = await contactsService.updateContact(contact_id, user_id, body);
        return res.status(200).send({ response });

    } catch (error:any) {
        let code=500;
        if (error instanceof ValidationException) code=400;
        if (error instanceof NotFoundException) code=404;
        return res.status(code).send({ message: error.message });
    }
}