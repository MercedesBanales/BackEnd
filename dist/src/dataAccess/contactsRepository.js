"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsRepository = void 0;
class ContactsRepository {
    constructor() {
        this.contacts = [];
        this.next_id = 1;
    }
    createContact(contact) {
        contact.id = this.next_id;
        this.contacts.push(contact);
        this.next_id++;
        return contact;
    }
    getContacts() {
        return this.contacts;
    }
    updateContact(contact) {
        const index = this.contacts.findIndex(c => c.id === contact.id);
        this.contacts[index].merge(contact);
        return contact;
    }
}
exports.ContactsRepository = ContactsRepository;
//# sourceMappingURL=contactsRepository.js.map