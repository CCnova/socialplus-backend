import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(id: string, data: UpdateUserDTO): Promise<User> {
    if (!id) throw new MissingParamError('id');
    const user = await this.usersRepository.findById(id);
    if (!user) throw new Error('User does not exists!');
    const updatedUser = await this.usersRepository.update(id, data);

    return updatedUser;
  }
}