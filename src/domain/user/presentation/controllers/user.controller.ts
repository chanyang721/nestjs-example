import { Controller }      from "@nestjs/common";
import { IUserController } from "../interfaces/user.controller.interface";
import { UserService }     from "../../application/services/user.service";



@Controller("user")
export class UserController implements IUserController {
  constructor( private readonly userService: UserService ) {
  }


}
