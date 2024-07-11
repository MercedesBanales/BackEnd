"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const updateRequest = (req, user) => {
    req.id = user.id;
    req.name = user.name;
    req.email = user.email;
};
const authenticateToken = () => (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        updateRequest(req, user);
        next();
    });
};
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=authorization.js.map