### Entity = User

The entity is the most abstract layer of the application. It represents the data and behaviors that are fundamental to the application's purpose.

- Entities are the most general and reusable part of the application.
- Entities are the most stable part of the application. They are the least likely to change when something external changes.

```typescript
// src/entities/User.ts
// Here, we are declaring the User entity
// Entity/Model: represents a table in the database

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
```

### DTO = Data Transfer Object

DTO represents the data that will be transfered between the layers of the application.

```typescript
// src/useCases/CreateUser/ICreateUserRequestDTO.ts
// here, we are declaring the DTO (Data Transfer Object) for the CreateUser use case
// DTO: represents the data that will be transfered between the layers of the application

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
```

### Repository = IUserRepository

```typescript
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
```

### Use Case = CreateUserUseCase

Represents the business logic of the applicaiton. Represents the steps that the application needs to take to accomplish a specific action.

```typescript
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
```

### Controller = CreateUserController

```typescript
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
```
