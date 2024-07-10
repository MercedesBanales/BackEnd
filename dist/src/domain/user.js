"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
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
    get password() {
        return this._password;
    }
    set id(id) {
        this._id = id;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map