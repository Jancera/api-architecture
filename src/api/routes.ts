import { Router } from "express";
import { UserController } from "./controllers/user";
import { UserService } from "../business/services/user";
import { UserRepository } from "../infrastructure/repositories/user";

export class Routes {
  userRepository: UserRepository;

  userService: UserService;

  userController: UserController;

  router: Router;

  constructor() {
    this.router = Router();
    this.userRepository = new UserRepository();
    this.userService = new UserService(this.userRepository);
    this.userController = new UserController(this.userService);

    this.router.get("/", (req, res) => this.userController.get(req, res));

    this.router.post("/create", (req, res) => this.userController.create(req, res));
  }

  getRoutes(): Router {
    return this.router;
  }
}

export default Routes;
