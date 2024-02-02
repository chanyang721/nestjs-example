import { CacheInterceptor } from "@nestjs/cache-manager";
import { Body, Controller, Get, Post, Req, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import type { Response } from "express";
import { JwtAuthRefreshGuard } from "../../../fundamentals/guards/local/jwt.refresh.guard";
import { LocalAuthGuard } from "../../../fundamentals/guards/local/local.auth.guard";
import { COOKIE_ACCESS_TOKEN_OPTIONS, COOKIE_REFRESH_TOKEN_OPTIONS } from "../../../helpers/jwt/options";
import { COOKIE_ACCESS_TOKEN_NAME, COOKIE_REFRESH_TOKEN_NAME } from "../../../utils/constants";
import { Public } from "../../../utils/decoretors";
import { AuthService } from "../../application/services/auth.service";
import { RegisterUserDto } from "../dtos/auth.register.user.dto";
import { LoginDto } from "../dtos/login.dto";
import { TokenDto } from "../dtos/token.dto";
import { IAuthControllerAdapter } from "./adaptor";
import { ApiLoginDecorator, ApiRefreshDecorator, ApiRegisterDecorator } from "./swagger";



@Public()
@ApiTags( "auth" )
@Controller( "auth" )
@UseInterceptors( CacheInterceptor )
export class AuthController implements IAuthControllerAdapter {
    constructor( private readonly authService: AuthService ) {
    }
    
    
    @Post( "register" )
    @ApiRegisterDecorator()
    @UseGuards( LocalAuthGuard )
    async register(
      @Body() registerUserDto: RegisterUserDto
    ): Promise<any> {
        return await this.authService.register( registerUserDto );
    }
    
    
    @Post( "login" )
    @ApiLoginDecorator()
    async login(
      @Body() loginDto: LoginDto,
      @Res( { passthrough: true } ) res: Response
    ): Promise<TokenDto> {
        const tokens: TokenDto = await this.authService.login( loginDto );
        
        res.cookie( COOKIE_ACCESS_TOKEN_NAME, tokens.access_token, COOKIE_ACCESS_TOKEN_OPTIONS );
        res.cookie( COOKIE_REFRESH_TOKEN_NAME, tokens.refresh_token, COOKIE_REFRESH_TOKEN_OPTIONS );
        
        return tokens;
    }
    
    
    @Get( "refresh" )
    @ApiRefreshDecorator()
    @UseGuards( JwtAuthRefreshGuard )
    async refresh(
      @Req() req: any
    ): Promise<Pick<TokenDto, "access_token">> {
        return await this.authService.refreshAccessToken( req.user, req.cookie.refresh_token );
    }
}
