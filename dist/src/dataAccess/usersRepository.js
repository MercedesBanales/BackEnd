"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
class UsersRepository {
    constructor() {
        this.users = [];
    }
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=usersRepository.js.map