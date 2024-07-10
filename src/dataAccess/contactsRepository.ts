import { Contact } from '../domain/contact';

const contacts: Contact[] = [];
let next_id = 1;

export const createContact = (contact: Contact) : Contact => {
        contact.id = next_id;
        contacts.push(contact);
        next_id++;
        return contact
}

export const getContacts = (): Contact[] => {
    return contacts;
}

export const updateContact = (contact: Contact): Contact => {
    const index = contacts.findIndex(c => c.id === contact.id);
    contacts[index].merge(contact)
    return contact;
}
