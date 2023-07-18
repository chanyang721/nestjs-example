import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { Public }                           from "../../../../lib/utils/decoretors";
import { CreateUserDto }                    from "../dtos/create.user.dto";
import { IUserController }                  from "../interfaces/user.controller.interface";
import { UserService }                      from "../../application/services/user.service";


@Public()
@Controller("user")
export class UserController implements IUserController {
  constructor(
    private readonly userService: UserService
  ) {
  }

  @Post()
  public async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<any> {
    return await this.userService.createUser(createUserDto)
  }

  @Get()
  public async findUserInfoWithAuth(
    @Body() body: any,
  ): Promise<any> {
    return await this.userService.findUserInfoWithAuth(body);
  }
}
