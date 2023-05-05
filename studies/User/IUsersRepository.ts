// src/repositories/IUsersRepository.ts

import { User } from "./User";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";
// here, we are declaring the interface for the UsersRepository
// Repository: represents the access to the database
// the repository is responsible for all the operations related to the database

// we're simulating the operations that we would do in the database
export interface IUsersRepository {
  create(data: ICreateUserRequestDTO): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
