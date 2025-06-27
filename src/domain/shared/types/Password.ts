import { InvalidPasswordError } from "../../errors/user-errors/InvalidPasswordError";

export default class Password {
    private constructor(private readonly value: string) { }

    static passwordlRegexValidator = /^(?=.*[A-Z])(?=.*\d)(?=.*[@_!]).{9,}$/;

    static from(value: string): Password {
        if (!this.passwordlRegexValidator.test(value)) {
            throw new InvalidPasswordError;
        }
        return new Password(value);
    }

    getValue(): string {
        return this.value;
    }

    toString(): string {
        return this.value;
    }
}