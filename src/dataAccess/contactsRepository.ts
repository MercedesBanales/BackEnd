import { Contact } from './contact';

const contacts: Contact[] = [];
let next_id = 1;

export const createContact = (contact: Contact) : Contact => {
        contact.id = next_id;
        contacts.push(contact);
        next_id++;
        return contact
}

export const getContacts = (user_id: number): Contact[] => {
    return contacts.filter(c => c.userId === user_id);
}

export const updateContact = (id: number, contact: Contact): Contact => {
    const index = contacts.findIndex(c => c.id === id);
    contacts[index].merge(contact)
    return contact;
}

export const exists = (id: number): boolean => {
    return contacts.some(c => c.id === id);
}
