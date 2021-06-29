import { getCustomRepository } from "typeorm";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export const getListUsersDependencies = () => {
  const usersRepository = getCustomRepository(PostgresUsersRepository);
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return { listUsersController };
}