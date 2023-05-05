// what is this code doing?

import { User } from "../models/User";

export interface IUsersRepository {
  // find the user by email and return a promise of User
  findByEmail(email: string): Promise<User | undefined>;
  // save the user and return a promise of void
  save(user: User): Promise<void>;
}
