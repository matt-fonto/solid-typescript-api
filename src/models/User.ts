import { uuid } from "uuidv4";

export class User {
  // public: anyone can access
  // readonly: anyone can access, but cannot change
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    this.email = props.email;
    this.name = props.name;
    this.password = props.password;
    // if id is not passed, generate a new one
    // it's interesting to create the id in the application instead of the database because
    // it decouples the application from the database implementation
    this.id = id || uuid();
  }
}
