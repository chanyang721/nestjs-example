import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags }                           from "@nestjs/swagger";
import { ApiRegisterDecorator }              from "../swagger/api.register.decorator";
import { Public }                            from "../../../decoretor";
import { LocalAuthGuard }                    from "../../../core-fundamental/guards/local/local.auth.guard";
import { IAuthController }                   from "../interface/auth.controller.interface";
import { FirebaseUserDto }                   from "../dto/auth.register.user.dto";
import { AuthService }                       from "../../application/service/auth.service";
import { UserEntity }                        from "../../../../domain/user/infrastructure/entities/user.entity";



@Public()
@ApiTags("auth")
@Controller("auth")
export class AuthController implements IAuthController<UserEntity> {
  constructor( private readonly authService: AuthService ) {
  }


  /**
   * @description: [ POST ] register user
   * @param firebaseUserDto FirebaseUserDto
   * @return any
   */
  @Post("register")
  @ApiRegisterDecorator()
  @UseGuards(LocalAuthGuard)
  async registerUserThroughFirebase(
    @Body() firebaseUserDto: FirebaseUserDto
  ): Promise<any> {
    return await this.authService.registerUser(FirebaseUserDto);
  }


}
