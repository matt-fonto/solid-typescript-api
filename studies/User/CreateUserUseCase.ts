import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";
import { IUsersRepository } from "./IUsersRepository";
import { User } from "./User";

// here, we are declaring the CreateUser use case
export class CreateUserUseCase {
  // the use case receives the repository as a parameter, so it can simulate the operations that we would do in the database
  constructor(private usersRepository: IUsersRepository) {}

  // we pass the data that we want to create a user as a parameter
  async execute(data: ICreateUserRequestDTO): Promise<User> {
    // we create a new user
    const user = await this.usersRepository.create(data);

    return user;
  }
}
