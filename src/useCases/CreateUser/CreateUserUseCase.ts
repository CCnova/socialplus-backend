import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(data: CreateUserDTO): Promise<User> {
    this.validateDTO(data);
    const userAlreadyExists = !!(await this.usersRepository.findByEmail(data.email));
    if (userAlreadyExists) throw new Error('User already exists!');
    try {
      const user = await this.usersRepository.create(data);
      return await this.usersRepository.save(user);
    } catch (error) {
      throw new Error(error.message || 'Internal server error');
    }
  }

  private validateDTO(data: CreateUserDTO): void {
    Object.keys(data).forEach(requestParam => {
      if (data[requestParam] === undefined) throw new MissingParamError(requestParam);
    });
  }
}