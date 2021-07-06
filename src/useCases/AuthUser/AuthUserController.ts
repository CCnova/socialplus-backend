import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {
  constructor(private authUserUseCase: AuthUserUseCase) {}

  public async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
      const { userId, authToken } = await this.authUserUseCase.execute({ email, password });

      return response.status(200).json({ user_id: userId, auth_token: authToken });
    } catch(error) {

      return response.status(401).json({
        message: error.message || 'Unauthorized'
      });
    }
  }
}