// src/useCases/CreateUser/CreateUserController.ts
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    // we get the data from the request body and use our DTO to validate it
    const { name, email, password } = req.body as ICreateUserRequestDTO;

    try {
      // we execute the use case, which in this case will create a new user
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      // if everything goes well, we return the user
      return res.status(201).json(user);
    } catch (error) {
      // if something goes wrong, we return the error
      return res.status(400).json({ message: error.message });
    }
  }
}
