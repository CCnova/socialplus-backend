import { Request, Response } from "express";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { ...params } = request.body;
    try {
      const updatedUser = await this.updateUserUseCase.execute(id, params);

      return response.status(200).json({ User: updatedUser });
    } catch (error) {
      return error instanceof MissingParamError
        ? response.status(400).json({ message: error.message })
        : response.status(500).json({ message: "Unexpected Error!" });
    }
  }
}
