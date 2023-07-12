import type { Request, Response }   from "express";
import { RegisterUserDto } from "../dto/auth.register.user.dto";
import { LoginDto }        from "../dto/login.firebase.user.dto";
import { IToken }          from "./token.interface";



export interface IAuthController {
  registerUserThroughAuthenticationServer( registerUserDto: RegisterUserDto ): Promise<any>;

  login( loginDto: LoginDto, res: Response ): Promise<IToken>;

  refresh( req: Request ): Promise<Pick<IToken, "access_token">>;
}
