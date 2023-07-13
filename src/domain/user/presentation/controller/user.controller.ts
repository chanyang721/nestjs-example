import { Controller }      from "@nestjs/common";
import { UserService }     from "../../application/service/user.service";
import { IUserController } from "../interface/user.controller.interface";



@Controller("user")
export class UserController implements IUserController {
  constructor(
    private readonly userService: UserService
  ) {
  }

}
