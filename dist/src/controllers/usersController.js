"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoggedUser = void 0;
const getLoggedUser = (req, res) => {
    try {
        const response = { name: req.name, email: req.email };
        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(error.status).send({ message: error.message });
    }
};
exports.getLoggedUser = getLoggedUser;
//# sourceMappingURL=usersController.js.map