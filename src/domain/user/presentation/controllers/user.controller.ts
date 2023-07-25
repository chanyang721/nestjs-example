import { Body, Controller, Post } from "@nestjs/common";
import { UpdateUserDto }          from "../dtos/update.user.dto";
import { IUserController }        from "../interfaces/user.controller.interface";
import { UserService }            from "../../application/services/user.service";



@Controller("user")
export class UserController implements IUserController {
  constructor(
    private readonly userService: UserService
  ) {
  }


  @Post()
  public async updateUser(
    @Body() updateUserDto: UpdateUserDto
  ): Promise<any> {
    return await this.userService.updateUser(updateUserDto);
  }
}
