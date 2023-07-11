import type { Response }                                                                                                  from "express";
import { Body, Controller, Post, Res, UseGuards }                                                                         from "@nestjs/common";
import { ApiTags }                                                                                                        from "@nestjs/swagger";
import { ApiRegisterDecorator } from "../swagger/api.register.decorator";
import { Public }               from "../../../utils/decoretor";
import { LocalAuthGuard }       from "../../../core-fundamental/guards/local/local.auth.guard";
import { IAuthController }                                                                                                from "../interface/auth.controller.interface";
import { AuthService }                                                                                                    from "../../application/service/auth.service";
import { UserEntity }                                                                                                     from "../../../../domain/user/infrastructure/entities/user.entity";
import { ApiLoginDecorator }                                                                                              from "../swagger/api.login.decorator";
import { LoginDto }                                                                                                   from "../dto/login.firebase.user.dto";
import { LoginResponseDto }                                                                                               from "../dto/login.response.dto";
import { IToken }                                                                                                         from "../interface/token.interface";
import { COOKIE_ACCESS_TOKEN_NAME, COOKIE_ACCESS_TOKEN_OPTIONS, COOKIE_REFRESH_TOKEN_NAME, COOKIE_REFRESH_TOKEN_OPTIONS } from "../../../utils/constant";
import { RegisterUserDto }                                                                                                from "../dto/auth.register.user.dto";



@Public()
@ApiTags("auth")
@Controller("auth")
export class AuthController implements IAuthController<UserEntity> {
  constructor( private readonly authService: AuthService ) {
  }


  /**
   * @description: [ POST ] register user
   * @param registerUserDto RegisterUserDto
   * @return any
   */
  @Post("register")
  @ApiRegisterDecorator()
  @UseGuards(LocalAuthGuard)
  async registerUserThroughAuthenticationServer (
    @Body() registerUserDto: RegisterUserDto
  ): Promise<any> {
    return await this.authService.register(registerUserDto);
  }


  /**
   * @description [ POST ] Auth Login API
   * @param loginDto LoginDto
   * @param res Request with user
   * @returns LoginResponseDto
   * */
  @Post("login")
  @ApiLoginDecorator()
  async login(
    @Body() loginDto: any,
    @Res({ passthrough: true }) res: Response
  ): Promise<LoginResponseDto> {
    const tokens: IToken = await this.authService.login(loginDto);

    res.cookie(COOKIE_ACCESS_TOKEN_NAME, tokens.access_token, COOKIE_ACCESS_TOKEN_OPTIONS);
    res.cookie(COOKIE_REFRESH_TOKEN_NAME, tokens.refresh_token, COOKIE_REFRESH_TOKEN_OPTIONS);

    return tokens;
  }
}
