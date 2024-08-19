"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const user_1 = require("../domain/user");
const notFoundException_1 = require("../validators/exceptions/notFoundException");
const users = [
    new user_1.User(1, 'John Doe', 'john@hotmail.com', '123456'),
    new user_1.User(2, 'Jane Doe', 'jane@hotmail.com', '123456')
];
const getUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user)
        throw new notFoundException_1.NotFoundException('User not found');
    return user;
};
exports.getUser = getUser;
//# sourceMappingURL=usersRepository.js.map