import { IUsersRepository } from "../../repositories/IUsersRepository";
import { InvalidParamError } from "../../utils/errors/InvalidParamError";
import { Encrypter } from "../../utils/helpers/encrypter";
import { TokenGenerator } from "../../utils/helpers/tokenGenerator";
import { AuthUserDTO } from "./AuthUserDTO";

type AuthResponse = {
  userId: string;
  authToken: string;
};

export class AuthUserUseCase {
  constructor(private usersRepository: IUsersRepository, private tokenGenerator: TokenGenerator) {}

  public async execute(data: AuthUserDTO): Promise<AuthResponse> {
    const { email, password } = data;
    const userWithProvidedEmail = await this.usersRepository.findByEmail(email);
    if (!userWithProvidedEmail) throw new InvalidParamError('Email or Password');
    const passwordIsValid = await Encrypter.compare(password, userWithProvidedEmail.password);
    if (!passwordIsValid) throw new InvalidParamError('Email or Password');
    const authToken = await this.tokenGenerator.generate(userWithProvidedEmail.id);

    return { userId: userWithProvidedEmail.id, authToken };
  }
}