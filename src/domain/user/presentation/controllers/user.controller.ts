import { Controller }      from "@nestjs/common";
import { UserService }     from "../../application/services/user.service";
import { IUserController } from "../interfaces/user.controller.interface";



@Controller("user")
export class UserController implements IUserController {
  constructor(
    private readonly userService: UserService
  ) {
  }

}
