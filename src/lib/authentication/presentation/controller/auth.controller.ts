import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService }                       from "../../application/service/auth.service";
import { Public }                            from "../../../decoretor";
import { ApiTags }                           from "@nestjs/swagger";
import { IAuthController }                   from "../interface/auth.controller.interface";
import { ApiRegisterDecorator }              from "../swagger/api.register.decorator";
import { LocalAuthGuard }                    from "../../../core-fundamental/guards/local/local.auth.guard";
import { FirebaseUserDto }                   from "../dto/auth.register.user.dto";
import { UserEntity }                        from "../../../../domain/user/infrastructure/entities/user.entity";



@Public()
@ApiTags("auth")
@Controller("auth")
export class AuthController implements IAuthController<UserEntity> {
  constructor( private readonly authService: AuthService ) {
  }


  /**
   * @description: [ POST ] register user
   * @param firebaseUserDto
   * @return any
   * TODO: Firebase auth 전용 Local Guard 만들기
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
