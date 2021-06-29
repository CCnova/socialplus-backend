import { getCustomRepository } from "typeorm";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const getCreateUserDependencies = () => {
  const postgresUsersRepository = getCustomRepository(PostgresUsersRepository);
  const createUserUseCase = new CreateUserUseCase(postgresUsersRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return { createUserController };
};