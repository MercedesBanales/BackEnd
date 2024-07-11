"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContact = exports.getContacts = exports.createContact = void 0;
const contact_1 = require("../domain/contact");
const contactsRepository = __importStar(require("../dataAccess/contactsRepository"));
const contactValidator_1 = require("../validators/contactValidator");
const validationException_1 = require("../validators/exceptions/validationException");
const notFoundException_1 = require("../validators/exceptions/notFoundException");
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
    const addedContact = contactsRepository.createContact(newContact);
    return { id: addedContact.id,
        succeeded: true,
        message: "Contact successfully created.",
    };
};
exports.createContact = createContact;
const getContacts = () => {
    return {
        contacts: contactsRepository.getContacts().map(c => ({ id: c.id,
            name: c.name,
            email: c.email,
            phone: c.phone,
            address: c.address,
            imagePath: c.imagePath }))
    };
};
exports.getContacts = getContacts;
const updateContact = (id, request) => {
    //email and name validation
    if (!contactsRepository.exists(id))
        throw new notFoundException_1.NotFoundException('Contact not found');
    const contact = new contact_1.Contact(request.name, request.email, request.phone, request.address, request.imagePath);
    contactsRepository.updateContact(id, contact);
    return { succeeded: true, message: "Contact successfully updated." };
};
exports.updateContact = updateContact;
//# sourceMappingURL=contactsService.js.map