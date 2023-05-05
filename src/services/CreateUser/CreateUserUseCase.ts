import { User } from "../../models/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";

// Single Responsibility Principle
export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  public async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "My App Team",
        email: "team@team.com",
      },
      subject: "Welcome to the app!",
      body: "<p>You can now login to our platform.</p>",
    });
  }
}
