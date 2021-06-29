import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    try {
      const users = await this.usersRepository.getAll();

      return users;
    } catch(error) {
      throw new Error(error.message || 'Unexpected Error');
    }
  }
}