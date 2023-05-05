// src/entities/User.ts
// Here, we are declaring the User entity
// Entity/Model: represents a table in the database

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
