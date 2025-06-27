import Email from "../shared/types/Email";
import User from "../entities/User";

export interface IUserRepository{
    findByEmail(email: Email) : Promise<User | null>;
    save(user: User): Promise<void>;
}