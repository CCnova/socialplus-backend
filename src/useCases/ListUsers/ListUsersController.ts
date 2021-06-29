import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const users = await this.listUsersUseCase.execute();

      return response.status(200).json({ Users: users });
    } catch(error) {
      return response.status(500).json({
        message: error.message || 'Internal Server Error!'
      });
    }
  }
}