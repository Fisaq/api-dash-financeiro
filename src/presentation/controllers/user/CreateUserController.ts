import makeCreateUserUseCase from "../../../use-cases/user/create-user";
import { Request, Response } from "express";
import { HttpErrorMapper } from "../../errors/HttpErrorMapper";

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userUseCase = makeCreateUserUseCase();
            const output = await userUseCase.execute(req.body);
            return res.status(201).json(output);
        }
        catch (error) {
            const { statusCode, message } = HttpErrorMapper.toHttp(error as Error);
            return res.status(statusCode).json({ error: message });
        }
    }
}