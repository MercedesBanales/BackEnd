"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = exports.updateContact = exports.getContacts = exports.createContact = void 0;
const contacts = [];
let next_id = 1;
const createContact = (contact) => {
    contact.id = next_id;
    contacts.push(contact);
    next_id++;
    return contact;
};
exports.createContact = createContact;
const getContacts = () => {
    return contacts;
};
exports.getContacts = getContacts;
const updateContact = (id, contact) => {
    const index = contacts.findIndex(c => c.id === id);
    contacts[index].merge(contact);
    return contact;
};
exports.updateContact = updateContact;
const exists = (id) => {
    return contacts.some(c => c.id === id);
};
exports.exists = exists;
//# sourceMappingURL=contactsRepository.js.map