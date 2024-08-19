"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usersService = __importStar(require("../services/usersService"));
const notFoundException_1 = require("../validators/exceptions/notFoundException");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const login = (req, res) => {
    try {
        const request = req.body;
        const user = usersService.getUser(request.email, request.password);
        const t = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const response = { token: token, message: "Logged in successfully", succeeded: true };
        return res.status(200).send(response);
    }
    catch (error) {
        let code = 500;
        if (error instanceof notFoundException_1.NotFoundException)
            code = 404;
        return res.status(code).send({ message: error.message });
    }
};
exports.login = login;
//# sourceMappingURL=authenticationController.js.map