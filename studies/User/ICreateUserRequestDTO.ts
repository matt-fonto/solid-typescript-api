// src/useCases/CreateUser/ICreateUserRequestDTO.ts
// here, we are declaring the DTO (Data Transfer Object) for the CreateUser use case
// DTO: represents the data that will be transfered between the layers of the application

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
