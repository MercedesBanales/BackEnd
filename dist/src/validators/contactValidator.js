"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidator = void 0;
const fluentvalidation_ts_1 = require("fluentvalidation-ts");
class ContactValidator extends fluentvalidation_ts_1.Validator {
    constructor() {
        super();
        this.Validate = (contact) => {
            const results = this.validate(contact);
            const errors = Object.entries(results).map(([property, error]) => ({
                property,
                message: error
            }));
            return {
                hasErrors: Object.values(results).some(Boolean),
                errors
            };
        };
        this.ruleFor('name').notEmpty().withMessage('Please enter your name');
        this.ruleFor('email').notEmpty().withMessage('Please enter your email');
        this.ruleFor('phone').notEmpty().withMessage('Please enter your phone number');
        this.ruleFor('address').notEmpty().withMessage('Please enter your address');
        this.ruleFor('email').emailAddress().withMessage('Please enter a valid email address');
    }
}
exports.ContactValidator = ContactValidator;
//# sourceMappingURL=contactValidator.js.map