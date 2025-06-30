import { PrismaUserRepository } from "../../../infra/repositories/PrismaUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";

const userRepository = new PrismaUserRepository();
const makeCreateUserUseCase = () => new CreateUserUseCase(userRepository);
export default makeCreateUserUseCase;