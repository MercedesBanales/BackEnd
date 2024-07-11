export class Contact {
    private _id!: number;
    private _name: string;
    private _email: string;
    private _address: string;
    private _phone: string;
    private _imagePath: string;
    private _userId: number;

    constructor(name: string, email: string, phone: string, address: string, imagePath: string, userId: number) {
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._imagePath = imagePath;
        this._userId = userId;
    }

    public get id(): number | undefined {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

    public get phone(): string {
        return this._phone;
    } 

    public get address(): string { 
        return this._address;
    }

    public get imagePath(): string {
        return this._imagePath;
    }

    public get userId(): number {
        return this._userId;
    }

    public set id(id: number) {
        this._id = id;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set email(email: string) {
        this._email = email;
    }

    public set phone(phone: string) {
        this._phone = phone;
    }

    public set address(address: string) {
        this._address = address;
    }

    public set imagePath(imagePath: string) {
        this._imagePath = imagePath;
    }

    merge = (contact: Contact) => {
        this.name = contact.name ?? this.name;
        this.email = contact.email ?? this.email;
        this.phone = contact.phone ?? this.phone;
        this.address = contact.address ?? this.address;
        this.imagePath = contact.imagePath ?? this.imagePath;
    }
  
}