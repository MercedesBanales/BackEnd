export class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _password: string;

    constructor(id: number, name: string, email: string, password: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

    public get password(): string {
        return this._password;
    }

    public set id(id: number) {
        this._id = id;
    }
}