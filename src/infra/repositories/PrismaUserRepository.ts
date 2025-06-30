import { IUserRepository } from "../../domain/repositories/IUserRepository";
import User from "../../domain/entities/User";
import prisma from "../prisma/PrismaClient";
import Email from "../../domain/shared/types/Email";
import Password from "../../domain/shared/types/Password";

export class PrismaUserRepository implements IUserRepository {
    async findByEmail(email: Email): Promise<User | null> {
        const data = await prisma.user.findUnique({ where: { email } });
        if (!data) return null;

        return new User(
            data.userId,
            data.name,
            Email.from(data.email),
            Password.fromHashed(data.passwordHashed)
        );
    }

    async save(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                id: user.userId,
                name: user.name,
                email: user.email,
                passwordHashed: user.paswordHashed
            }
        });
    }
}