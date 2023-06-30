import { User } from "../../business/entities/user";

export interface IUserRepository {
  get(): Promise<User>;
  create(user: User): Promise<User>;
}
