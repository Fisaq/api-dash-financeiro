import Email from "../../../domain/shared/types/Email";
import Password from "../../../domain/shared/types/Password";

export interface ICreateUserInput {
    name: string;
    email: Email;
    password: Password;
}

export interface ICreateUserOutput{
    id: string;
    name: string;
    email: Email;
}