import { ValidationException } from '../validators/exceptions/validationException';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { ContactDTO } from '../utils/DTOs/ContactDTO';
import * as contactsRepository from '../dataAccess/repositories/contactsRepository';

export const createContact = async (user_id: string, contact: ContactDTO): Promise<{ id: number, imagePath: string }> => {
    if (await contactsRepository.existsPhone(contact.phone, user_id)) throw new ValidationException('A contact with that phone number already exists.')
    const addedContact = await contactsRepository.createContact(contact);
    return { id: addedContact.getDataValue('id'), 
        imagePath: addedContact.getDataValue('imagePath') };
}

export const getContacts = async (user_id: string): Promise<{ contacts: ContactDTO[]}> => {
    const contacts = await contactsRepository.getContacts(user_id);
    return { contacts: contacts.map(contact => ({
        id: contact.getDataValue('id'), 
        name: contact.getDataValue('name'), 
        surname: contact.getDataValue('surname'),
        email: contact.getDataValue('email'), 
        title: contact.getDataValue('title'),
        phone: contact.getDataValue('phone'), 
        address: contact.getDataValue('address'), 
        imagePath: contact.getDataValue('imagePath')
    }) as ContactDTO ) };
}

export const updateContact = async (contact_id: string, user_id: string, contact: ContactDTO): Promise<{ imagePath: string }> => {
    if (!await contactsRepository.exists(contact_id, user_id)) throw new NotFoundException('The current user does not have this contact.');
    if (contact.phone && await contactsRepository.existsPhone(contact.phone, user_id)) throw new ValidationException('A contact with that phone number already exists.');
    const updatedContact = await contactsRepository.updateContact(contact_id, contact);  
    return { imagePath: updatedContact.getDataValue('imagePath') };
}

