import { CreateContactRequest } from '../apiModels/requests/CreateContactRequest';
import { CreateContactResponse} from '../apiModels/responses/CreateContactResponse';
import { ContactValidator, ValidationResult, ValidationError } from '../validators/contactValidator';
import { ValidationException } from '../validators/exceptions/validationException';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { ContactResponse } from '../apiModels/responses/ContactResponse';
import { ListContactsResponse } from '../apiModels/responses/ListContactsResponse';
import { UpdateContactResponse } from '../apiModels/responses/UpdateContactResponse';
import { UpdateContactRequest } from '../apiModels/requests/UpdateContactRequest';
import { ContactDTO } from '../utils/DTOs/ContactDTO';
import * as contactsRepository from '../dataAccess/repositories/contactsRepository';

const formatMessage = (errors: ValidationError[]) => {
    return errors.map(error => `${error.property}: ${error.message}`).join(', ');
}

const ValidateContact = (contact: ContactDTO) => {
    const contactValidator = new ContactValidator()
    const validationResult: ValidationResult = contactValidator.Validate(contact);
    if (validationResult.hasErrors) {
        throw new ValidationException(formatMessage(validationResult.errors));
    }
}

const CreateDTO = (contact: any, user_id: string): ContactDTO => {
    return {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        imagePath: contact.imagePath,
        user_id: user_id
    }
}

export const createContact = async (user_id: string, contact: CreateContactRequest): Promise<CreateContactResponse> => {
    const newContact: ContactDTO = CreateDTO(contact, user_id);
    ValidateContact(newContact);
    const addedContact = await contactsRepository.createContact(newContact);
    return { id: addedContact.getDataValue('id'), succeeded: true, message: "Contact successfully created." };
}

export const getContacts = async (user_id: string): Promise<ListContactsResponse> => {
    const contacts = await contactsRepository.getContacts(user_id);
    return { contacts: contacts.map(contact => ({
        id: contact.getDataValue('id'), 
        name: contact.getDataValue('name'), 
        email: contact.getDataValue('email'), 
        phone: contact.getDataValue('phone'), 
        address: contact.getDataValue('address'), 
        imagePath: contact.getDataValue('imagePath')
    }) as ContactResponse ) };
}

export const updateContact = async (contact_id: string, user_id: string, request: UpdateContactRequest): Promise<UpdateContactResponse> => {
    if (!await contactsRepository.exists(contact_id, user_id)) throw new NotFoundException('The current user does not have this contact.');
    const contact: ContactDTO = CreateDTO(request, user_id);
    contactsRepository.updateContact(contact_id, contact);   
    return { succeeded: true, message: "Contact successfully updated." };
}

