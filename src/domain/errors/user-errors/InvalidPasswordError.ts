import { DomainError } from "../DomainError";

export class InvalidPasswordError extends DomainError {
    constructor() {
        super(`A senha fornecida não é válida. Tente uma senha mais forte!`);
    }
}