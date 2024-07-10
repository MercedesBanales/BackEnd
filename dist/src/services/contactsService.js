"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = void 0;
const contact_1 = require("../domain/contact");
const contactValidator_1 = require("../validators/contactValidator");
const validationException_1 = require("../validators/exceptions/validationException");
const formatMessage = (errors) => {
    return errors.map(error => `${error.property}: ${error.message}`).join(', ');
};
const ValidateContact = (contact) => {
    const contactValidator = new contactValidator_1.ContactValidator();
    const validationResult = contactValidator.Validate(contact);
    if (validationResult.hasErrors) {
        throw new validationException_1.ValidationException(formatMessage(validationResult.errors));
    }
};
const createContact = (contact) => {
    const newContact = new contact_1.Contact(contact.name, contact.email, contact.phone, contact.address, contact.imagePath);
    ValidateContact(newContact);
    return { id: newContact.id,
        succeeded: true,
        message: "Contact successfully created.",
    };
};
exports.createContact = createContact;
//# sourceMappingURL=contactsService.js.map