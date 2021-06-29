import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    // TODO: Add check for missing params
    const userAlreadyExists = !!(await this.usersRepository.findByEmail(data.email));
    if (userAlreadyExists) throw new Error('User already exists!');
    try {
      const user = await this.usersRepository.create(data);
      return await this.usersRepository.save(user);
    } catch (error) {
      throw new Error(error.message || 'Internal server error');
    }
  }
}