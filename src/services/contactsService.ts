import { Contact } from '../domain/contact';
import { CreateContactRequest } from '../models/requests/CreateContactRequest';
import { CreateContactResponse } from '../models/responses/CreateContactResponse';
import { ContactValidator, ValidationResult, ValidationError } from '../validators/contactValidator';
import { ValidationException } from '../validators/exceptions/validationException';

let next_id = 1;

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
    const newContact = new Contact(next_id, contact.name, contact.email, contact.phone, contact.address, contact.imagePath);
    ValidateContact(newContact);
    next_id++;
    return { id: newContact.id, 
            succeeded: true, 
            message: "Contact successfully created.", 
        };
}