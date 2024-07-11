import { Contact } from '../domain/contact';
import * as contactsRepository from '../dataAccess/contactsRepository';
import { CreateContactRequest } from '../models/requests/CreateContactRequest';
import { CreateContactResponse} from '../models/responses/CreateContactResponse';
import { ContactValidator, ValidationResult, ValidationError } from '../validators/contactValidator';
import { ValidationException } from '../validators/exceptions/validationException';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { ContactResponse } from '../models/responses/ContactResponse';
import { ListContactsResponse } from '../models/responses/ListContactsResponse';
import { UpdateContactResponse } from '../models/responses/UpdateContactResponse';
import { UpdateContactRequest } from '../models/requests/UpdateContactRequest';


const formatMessage = (errors: ValidationError[]) => {
    return errors.map(error => `${error.property}: ${error.message}`).join(', ');
}

const ValidateContact = (contact: Contact) => {
    const contactValidator = new ContactValidator()
    const validationResult: ValidationResult = contactValidator.Validate(contact);
    if (validationResult.hasErrors) {
        throw new ValidationException(formatMessage(validationResult.errors));
    }
}

export const createContact = (contact: CreateContactRequest): CreateContactResponse => {
    const newContact = new Contact(contact.name, contact.email, contact.phone, contact.address, contact.imagePath);
    ValidateContact(newContact);
    const addedContact = contactsRepository.createContact(newContact);
    return { id: addedContact.id, 
            succeeded: true, 
            message: "Contact successfully created.", 
        };
}

export const getContacts = (): ListContactsResponse => {
    return {
        contacts: contactsRepository.getContacts().map(c => ({ id: c.id, 
            name: c.name, 
            email: c.email, 
            phone: c.phone, 
            address: c.address, 
            imagePath: c.imagePath }) as ContactResponse)
    };
}

export const updateContact = (id: number, request: UpdateContactRequest): UpdateContactResponse => {
    //email and name validation
    if (!contactsRepository.exists(id)) throw new NotFoundException('Contact not found');
    const contact = new Contact(request.name, request.email, request.phone, request.address, request.imagePath);
    contactsRepository.updateContact(id, contact);
    return { succeeded: true, message: "Contact successfully updated." };
}

