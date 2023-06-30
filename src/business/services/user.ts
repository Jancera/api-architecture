import { IUserRepository } from "../../infrastructure/interfaces/user";
import { CreateUserDTO } from "../DTOs/create-user";
import { User } from "../entities/user";
import { IUserService } from "./interfaces/user";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(): Promise<User> {
    return this.userRepository.get();
  }

  async createUser(data: CreateUserDTO): Promise<boolean> {
    const user = new User(data);

    try {
      this.userRepository.create(user);
      return true;
    } catch (error) {
      return false;
    }
  }
}
