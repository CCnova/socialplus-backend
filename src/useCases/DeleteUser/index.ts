import { getCustomRepository } from "typeorm";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export const getDeleteUserDependencies = () => {
  const usersRepository = getCustomRepository(PostgresUsersRepository);
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return { deleteUserController };
}