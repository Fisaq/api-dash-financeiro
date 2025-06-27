import { DomainError } from "../DomainError";

export class InvalidEmailError extends DomainError {
    constructor(email: string) {
        super(`O email fornecido : (${email}) não é um email válido.`);
    }
}