import { User } from "../../business/entities/user";
import { IUserRepository } from "../interfaces/user";

export class UserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    try {
      // database communication

      console.log(user.getMembers());

      return user;
    } catch (error) {
      throw new Error("Connection errror");
    }
  }

  async get(): Promise<User> {
    try {
      const user = new User({
        id: 1,
        name: "John Doe",
        email: "john@john.com",
        password: "123456",
      });

      if (user === null) throw new Error("User not found");

      return user;
    } catch (error) {
      throw new Error("Connection errror");
    }
  }
}
