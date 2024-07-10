import { Contact } from '../domain/contact';
import { CreateContactRequest } from '../models/requests/CreateContactRequest';
import { CreateContactResponse } from '../models/responses/CreateContactResponse';
import { ContactValidator, ValidationResult, ValidationError } from '../validators/contactValidator';
import { ValidationException } from '../validators/exceptions/validationException';

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
    const newContact = new Contact(10, contact.name, contact.email, contact.phone, contact.address, contact.imagePath);
    ValidateContact(newContact);
    return { id: newContact.id, 
            succeeded: true, 
            message: "Contact successfully created.", 
        };
}