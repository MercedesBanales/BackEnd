import { ContactDTO } from "../../utils/DTOs/ContactDTO";
import { Contact } from "../models/Contact";

export const createContact = async (contact: ContactDTO) => {
    return await Contact.create({
        "name": contact.name,
        "surname": contact.surname,
        "email": contact.email,
        "phone": contact.phone,
        "address": contact.address,
        "title": contact.title,
        "imagePath": contact.imagePath,
        "UserId": contact.user_id
    });
}

export const getContacts = async (user_id: string) => {
    return await Contact.findAll({ where: { UserId: user_id } });
}

export const exists = async (contact_id: string, user_id: string) => {
    return await Contact.findOne({ where: { id: contact_id, UserId: user_id } });
}

export const existsPhone = async (phone: string, user_id: string) => {
    return await Contact.findOne({ where: { phone: phone, UserId: user_id } });
}

export const updateContact = async (contact_id: string, request: ContactDTO) => {
    const contact = await Contact.findByPk(contact_id);
    return await contact!.update({
        name: request.name,
        surname: request.surname,
        email: request.email,
        phone: request.phone,
        address: request.address,
        title: request.title,
        imagePath: request.imagePath
    });
}