import { User } from "../entities/User";
import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";

export interface IUsersRepository {
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
  create(data: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  update(id: string, data: UpdateUserDTO): Promise<User>;
}