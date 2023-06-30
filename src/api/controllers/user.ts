import { Request, Response } from "express";
import { CreateUserDTO } from "../../business/DTOs/create-user";
import { IUserService } from "../../business/services/interfaces/user";
import { User } from "../../business/entities/user";

export class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async get(req: Request, res: Response) {
    try {
      const response = await this.userService.getUser();

      res.send(response);
    } catch (error) {
      console.log(error);
      res.send(null);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const input = new CreateUserDTO(req.body);

      const response = await this.userService.createUser(input);

      res.send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Internal server error" });
    }
  }
}
