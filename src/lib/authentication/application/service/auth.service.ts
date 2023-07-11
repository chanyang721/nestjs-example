import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService }                            from "../../../utils/jwt/jwt.service";
import { HashingService }                        from "../../../utils/hashing/hashing.service";
import { IToken }                                from "../../presentation/interface/token.interface";
import { LoginDto }                              from "../../presentation/dto/login.firebase.user.dto";
import { RegisterUserDto }                       from "../../presentation/dto/auth.register.user.dto";
import { AuthRepository }                        from "../../infrastructure/repository/auth.repository";



@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly hashingService: HashingService
  ) {
  }


  public async register( registerUserDto: RegisterUserDto ): Promise<any> {
    return await this.authRepository.registerUser(registerUserDto);
  }


  public async login( loginDto: LoginDto ): Promise<any> {
    // const auth = await this.authRepository.findByUid(loginDto.uid);
    //
    // const tokens: IToken = await this.jwtService.getTokens(auth.id);
    //
    // const hashedRefreshToken = await this.hashingService.hashingTarget(tokens.refresh_token);
    //
    // await this.authRepository.updateCurrentRefreshToken(auth.id, hashedRefreshToken);
    //
    // return tokens;
  }


  public async getUserIfRefreshTokenMatches( refresh_token: string, uid: string ): Promise<any> {
    const auth = await this.authRepository.findByUid(uid);
    if ( !auth ) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    const isRefreshTokenMatching = await this.hashingService.compare(refresh_token, auth.currentRefreshToken);

    if ( !isRefreshTokenMatching ) {
      throw new HttpException("Refresh token mismatch", HttpStatus.UNAUTHORIZED);
    }

    return { uid: auth.uid };
  }
}
