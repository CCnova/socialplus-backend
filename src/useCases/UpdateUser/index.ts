import { getCustomRepository } from "typeorm";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export const getUpdateUserDependencies = () => {
  const usersRepository = getCustomRepository(PostgresUsersRepository);
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);
  const updateUserController = new UpdateUserController(updateUserUseCase);

  return { updateUserController };
};