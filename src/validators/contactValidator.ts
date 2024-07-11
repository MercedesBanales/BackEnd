import { Validator } from 'fluentvalidation-ts';
import { CreateContactRequest } from '../models/requests/CreateContactRequest';

export interface ValidationError {
    property: string;
    message: string;
}

export interface ValidationResult {
    hasErrors: boolean;
    errors: ValidationError[];
}

export class ContactValidator extends Validator<CreateContactRequest> {
  constructor() {
    super();

    this.ruleFor('name').notEmpty().withMessage('Please enter your name');
    this.ruleFor('email').notEmpty().withMessage('Please enter your email');
    this.ruleFor('phone').notEmpty().withMessage('Please enter your phone number');
    this.ruleFor('address').notEmpty().withMessage('Please enter your address');
    this.ruleFor('email').emailAddress().withMessage('Please enter a valid email address');
  }

  Validate = (contact: CreateContactRequest): ValidationResult => {
    const results = this.validate(contact);
    const errors: ValidationError[] = Object.entries(results).map(([property, error]) => ({
        property,
        message: error
    }) as ValidationError );
    return {
        hasErrors: Object.values(results).some(Boolean),
        errors
    }
    }
}