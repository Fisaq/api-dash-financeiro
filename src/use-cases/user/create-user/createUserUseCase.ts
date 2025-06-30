import User from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import Email from "../../../domain/shared/types/Email";
import Password from "../../../domain/shared/types/Password";
import { ICreateUserInput, ICreateUserOutput } from "./dto";
import { v4 as uuid } from "uuid";
import bcrypt from 'bcrypt';

export class CreateUserUseCase {
    private SALT_ROUNDS = 10;

    constructor(private userRepository: IUserRepository) { }

    async execute(input: ICreateUserInput): Promise<ICreateUserOutput> {
        const { name, email, password } = input;

        const validEmail = Email.from(email.getValue());

        const existing = await this.userRepository.findByEmail(validEmail);
        if (existing) throw new Error('O email fornecido já está cadastrado.');

        const validPassword = Password.from(password.getValue());
        const hashdPassword = await bcrypt.hash(validPassword.getValue(), this.SALT_ROUNDS);

        const user = new User(uuid(), name, email, Password.fromHashed(hashdPassword));

        await this.userRepository.save(user);

        return {
            id: user.userId,
            name: user.name,
            email: user.email
        }

    }
}