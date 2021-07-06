import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { InvalidParamError } from "../../utils/errors/InvalidParamError";
import { MissingParamError } from "../../utils/errors/MissingParamError";
import { CpfValidator } from "../../utils/helpers/cpfValidator";
import { EmailValidator } from "../../utils/helpers/emailValidator";
import { Encrypter } from "../../utils/helpers/encrypter";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute(data: CreateUserDTO): Promise<User> {
    this.validateDTO(data);
    const userAlreadyExists = !!(await this.usersRepository.findByEmail(
      data.email
    ));
    if (userAlreadyExists) throw new Error("User already exists!");
    try {
      const user = await this.usersRepository.create({
        ...data,
        password: await Encrypter.hash(data.password),
      });
      return await this.usersRepository.save(user);
    } catch (error) {
      throw new Error(error.message || "Internal server error");
    }
  }

  private validateDTO(data: CreateUserDTO): void {
    Object.keys(data).forEach((requestParam) => {
      if (data[requestParam] == undefined)
        throw new MissingParamError(requestParam);
      if (data[requestParam] === '')
        throw new InvalidParamError(requestParam);
    });
    if (!EmailValidator.isValid(data.email))
      throw new InvalidParamError('email');
    if (!CpfValidator.isValid(data.cpf))
      throw new InvalidParamError('cpf');
  }
}
