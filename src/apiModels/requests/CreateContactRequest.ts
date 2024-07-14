export interface CreateContactRequest {
    name: string;
    address: string;
    email: string;
    phone: string;
    imagePath?: string;
}