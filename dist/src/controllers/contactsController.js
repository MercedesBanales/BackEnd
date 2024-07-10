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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = createContact;
exports.getContacts = getContacts;
exports.updateContact = updateContact;
const contactsService = __importStar(require("../services/contactsService"));
const validationException_1 = require("../validators/exceptions/validationException");
function createContact(req, res) {
    try {
        const body = req.body;
        const response = contactsService.createContact(body);
        return res.status(200).send(response.id);
    }
    catch (error) {
        let code = 500;
        if (error instanceof validationException_1.ValidationException)
            code = 400;
        return res.status(code).send({ message: error.message });
    }
}
function getContacts(req, res) {
    try {
        return res.status(200).send({ message: 'Contact created' });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}
function updateContact(req, res) {
    try {
        return res.status(200).send({ message: 'Contact created' });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}
//# sourceMappingURL=contactsController.js.map