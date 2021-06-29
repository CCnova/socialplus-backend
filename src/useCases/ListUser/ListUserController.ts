import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  constructor(private listUserUserCase: ListUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const user = await this.listUserUserCase.execute({ id });

      return response.status(200).json({ User: user });
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      });
    }
  }
}