import { getCustomRepository } from "typeorm";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { TokenGenerator } from "../../utils/helpers/tokenGenerator";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";


const getAuthUserDependencies = () => {
  const usersRepository = getCustomRepository(PostgresUsersRepository);
  const tokenGenerator = new TokenGenerator();
  const authUserUseCase = new AuthUserUseCase(usersRepository, tokenGenerator);
  const authUserController = new AuthUserController(authUserUseCase);

  return { authUserController };
};

export { getAuthUserDependencies };
