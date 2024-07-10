"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(id, name, email, phone, address, imagePath) {
        this.merge = (contact) => {
            var _a, _b, _c, _d, _e;
            this.name = (_a = contact.name) !== null && _a !== void 0 ? _a : this.name;
            this.email = (_b = contact.email) !== null && _b !== void 0 ? _b : this.email;
            this.phone = (_c = contact.phone) !== null && _c !== void 0 ? _c : this.phone;
            this.address = (_d = contact.address) !== null && _d !== void 0 ? _d : this.address;
            this.imagePath = (_e = contact.imagePath) !== null && _e !== void 0 ? _e : this.imagePath;
        };
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._imagePath = imagePath;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
    get address() {
        return this._address;
    }
    get imagePath() {
        return this._imagePath;
    }
    set name(name) {
        this._name = name;
    }
    set email(email) {
        this._email = email;
    }
    set phone(phone) {
        this._phone = phone;
    }
    set address(address) {
        this._address = address;
    }
    set imagePath(imagePath) {
        this._imagePath = imagePath;
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map