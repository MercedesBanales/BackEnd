export interface CreateContactRequest {
    name: string;
    surname: string;
    address: string;
    title: string;
    email: string;
    phone: string;
    imagePath?: string;
}