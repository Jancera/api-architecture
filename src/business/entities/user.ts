import { CreateUserDTO } from "../DTOs/create-user";
import { IUser } from "./interfaces/user";
import { BaseEntity } from "./base";

export class User extends BaseEntity implements IUser {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(data: CreateUserDTO) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
