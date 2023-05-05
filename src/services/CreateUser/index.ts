import { MailtrapProvider } from "../../providers/implementations/MailtrapProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserControllers";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapProvider();
const postgresUserRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
