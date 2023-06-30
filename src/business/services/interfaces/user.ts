import { CreateUserDTO } from "../../DTOs/create-user";
import { User } from "../../entities/user";

export interface IUserService {
  createUser(data: CreateUserDTO): Promise<boolean>;
  getUser(): Promise<User>;
}
