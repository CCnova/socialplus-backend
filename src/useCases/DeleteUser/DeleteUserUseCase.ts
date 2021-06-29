import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { DeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: DeleteUserDTO): Promise<User> {
    const { id } = data;
    if (!id) throw new MissingParamError('id');
    try {
      const user = await this.usersRepository.findById(id);
      if (!user) throw new Error('User does not exists!');
      return await this.usersRepository.delete(id);
    } catch(error) {
      throw new Error(error.message || 'Internal Server Error');
    }
  }
}