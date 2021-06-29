import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { ListUserDTO } from "./ListUserDTO";

export class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ListUserDTO): Promise<User> {
    const { id } = data;
    if (!id) throw new MissingParamError('id');
    try {
      const user = await this.usersRepository.findById(id);
      if (!user) throw new Error('User does not exists!');

      return user;
    } catch(error) {
      throw new Error(error.message || 'Internal Server Error');
    }
  }
}