import { getCustomRepository } from "typeorm";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";


export const getListUserDependencies = () => {
  const usersRepository = getCustomRepository(PostgresUsersRepository);
  const listUserUseCase = new ListUserUseCase(usersRepository);
  const listUserController = new ListUserController(listUserUseCase);

  return { listUserController };
};