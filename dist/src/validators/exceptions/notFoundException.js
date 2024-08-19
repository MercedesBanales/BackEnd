"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
class NotFoundException extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=notFoundException.js.map