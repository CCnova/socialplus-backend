import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, email, cpf, instagram_email, admin } = request.body;
    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        email,
        cpf,
        admin,
        instagram_email,
      });

      return response.status(200).send(newUser);
    } catch(error) {
      // TODO: Add check for other error status
      return response.status(401).json({
        message: error.message || 'Unexpected error!'
      });
    }
  }
}