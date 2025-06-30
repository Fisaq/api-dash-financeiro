import { DomainError } from "../../domain/errors/DomainError";

export class HttpErrorMapper {
    static toHttp(error: Error) {
        if (error instanceof DomainError) {
            return { statusCode: 400, message: error.message };
        }

        return { statusCode: 500, messsage: 'Erro interno do servidor' };
    }
}