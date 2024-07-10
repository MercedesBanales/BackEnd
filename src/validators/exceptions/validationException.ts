import { ValidationResult } from "../contactValidator";

export class ValidationException extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}