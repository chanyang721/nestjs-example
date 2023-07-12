import type { Request, Response } from "express";
import { RegisterUserDto } from "../dto/auth.register.user.dto";
import { LoginDto }        from "../dto/login.dto";
import { TokenDto }        from "../dto/token.dto";



export interface IAuthController {
  register( registerUserDto: RegisterUserDto ): Promise<any>;

  login( loginDto: LoginDto, res: Response ): Promise<TokenDto>;

  refresh( req: Request ): Promise<Pick<TokenDto, "access_token">>;
}
