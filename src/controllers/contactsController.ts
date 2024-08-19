import type { Response } from 'express';
import * as contactsService from '../services/contactsService';
import { CreateContactRequest } from '../apiModels/requests/CreateContactRequest';
import { ValidationException } from '../validators/exceptions/validationException';
import { CreateContactResponse } from '../apiModels/responses/CreateContactResponse';
import { ListContactsResponse } from '../apiModels/responses/ListContactsResponse';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { UpdateContactRequest } from '../apiModels/requests/UpdateContactRequest';
import { UserRequest } from '../apiModels/requests/UserRequest';
import { ContactDTO } from '../utils/DTOs/ContactDTO';
import { ContactValidator, ValidationError, ValidationResult } from '../validators/contactValidator';
import { UpdateContactResponse } from '../apiModels/responses/UpdateContactResponse';
import { ContactResponse } from '../apiModels/responses/ContactResponse';

const ValidateContact = (contact: ContactDTO) => {
    const contactValidator = new ContactValidator()
    const validationResult: ValidationResult = contactValidator.Validate(contact);
    if (validationResult.hasErrors) {
        throw new ValidationException(formatMessage(validationResult.errors));
    }
}

const formatMessage = (errors: ValidationError[]) => {
    return errors.map(error => `${error.property}: ${error.message}`).join(', ');
}

const CreateDTO = (contact: any, user_id: string): ContactDTO => {
    return {
        name: contact.name,
        surname: contact.surname,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        title: contact.title,
        imagePath: contact.imagePath,
        user_id: user_id
    }
}

export async function createContact(req: UserRequest, res: Response) {
    try {
        const body: CreateContactRequest = { ...req.body, imagePath: req.file?.filename}
        const user_id = req.id!;
        const newContact: ContactDTO = CreateDTO(body, user_id);
        ValidateContact(newContact);
        const response: {id: number, imagePath: string} = await contactsService.createContact(user_id, newContact);
        return res.status(200).send(({ id: response.id, 
                                      imagePath: response.imagePath,
                                      succeeded: true, 
                                      message: "Contact successfully created." 
                                     } as CreateContactResponse ));
    } catch (error: any ) {
        let code = 500;
        if (error instanceof ValidationException) code = 400;
        return res.status(code).send({ message: error.message });
    }
}

export async function getContacts(req: UserRequest, res: Response) {
    try {
        const user_id = req.id!;
        const response: {contacts: ContactDTO[]} = await contactsService.getContacts(user_id);
        return res.status(200).send(({contacts: (response.contacts.map(contact => ({
            id: contact.id, 
            name: contact.name, 
            surname: contact.surname,
            email: contact.email, 
            title: contact.title,
            phone: contact.phone, 
            address: contact.address, 
            imagePath: contact.imagePath
        }) as ContactResponse )) }) as ListContactsResponse);
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
        const contact: ContactDTO = CreateDTO(body, user_id);
        const response: { imagePath: string } = await contactsService.updateContact(contact_id, user_id, contact);
        return res.status(200).send(({
            imagePath: response.imagePath,
            succeeded: true, 
            message: "Contact successfully updated."
        } as UpdateContactResponse));
    } catch (error:any) {
        let code=500;
        if (error instanceof ValidationException) code=400;
        if (error instanceof NotFoundException) code=404;
        return res.status(code).send({ message: error.message });
    }
}