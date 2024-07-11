import { ContactResponse } from './ContactResponse';
import { Response } from 'express';

export interface ListContactsResponse {
    contacts: ContactResponse[];
}