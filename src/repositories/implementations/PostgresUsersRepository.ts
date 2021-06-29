import { EntityManager, EntityRepository } from "typeorm";
import { User } from "../../entities/User";
import { CreateUserDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";


@EntityRepository(User)
export class PostgresUsersRepository implements IUsersRepository {
  constructor(private entityManager: EntityManager) {}

  async findById(id: string): Promise<User> {

    return await this.entityManager.findOne(User, { id });
  }

  async findByEmail(email: string): Promise<User> {

    return await this.entityManager.findOne(User, { email });
  }

  async findByCpf(cpf: string): Promise<User> {
  
    return await this.entityManager.findOne(User, { cpf });
  }

  async create(data: CreateUserDTO): Promise<User> {

    return this.entityManager.create(User, {
      ...data,
      balance: 0,
      level: 1,
      orders_ids: []
    });
  }

  async save(user: User): Promise<User> {
    
    return await this.entityManager.save(user);
  }

  async getAll(): Promise<User[]> {

  return await this.entityManager.find(User, {});
  }
}