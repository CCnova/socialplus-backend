import { Request, Response } from "express";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const deletedUser = await this.deleteUserUseCase.execute({ id });

      return response.status(200).json({ User: deletedUser });
    } catch (error) {
      return error instanceof MissingParamError
        ? response.status(400).json({ message: error.message })
        : response.status(500).json({ message: error.message || "Unexpected Error!" });
    }
  }
}
