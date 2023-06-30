import { Router } from "express";
import { UserController } from "./controllers/user";
import { UserService } from "../business/services/user";
import { UserRepository } from "../infrastructure/repositories/user";

const userRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get("/", (req, res) => userController.get(req, res));
userRouter.post("/create", (req, res) => userController.create(req, res));

export default userRouter;
