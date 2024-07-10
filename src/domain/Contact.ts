export class Contact {
    private id: number;
    private name: string;
    private email: string;
    private address: string;
    private phone: string;
    private imagePath: string;

    constructor(id: number, name: string, email: string, phone: string, address: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.imagePath = imagePath;
    }

    merge = (contact: Contact) => {
        this.name = contact.name ?? this.name;
        this.email = contact.email ?? this.email;
        this.phone = contact.phone ?? this.phone;
        this.address = contact.address ?? this.address;
        this.imagePath = contact.imagePath ?? this.imagePath;
    }
  
}