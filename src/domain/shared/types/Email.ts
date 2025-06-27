import { InvalidEmailError } from "../../errors/UserErrors/InvalidEmailError";

export default class Email {
    private constructor(private readonly value: string) { }

    static emailRegexValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    static from(value: string): Email {
        if (!this.emailRegexValidator.test(value)) {
            throw new InvalidEmailError(value);
        }
        return new Email(value);
    }

    getValue(): string {
        return this.value;
    }

    toString(): string {
        return this.value;
    }
}