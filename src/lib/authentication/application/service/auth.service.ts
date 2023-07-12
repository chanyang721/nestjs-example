import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService }                            from "../../../utils/jwt/jwt.service";
import { HashingService }                        from "../../../utils/hashing/hashing.service";
import { LoginDto }                              from "../../presentation/dto/login.firebase.user.dto";
import { RegisterUserDto }                       from "../../presentation/dto/auth.register.user.dto";
import { AuthRepository }                        from "../../infrastructure/repository/auth.repository";
import { TokenDto }                              from "../../presentation/dto/token.dto";



@Injectable()
export class AuthService {
  constructor( private readonly authRepository: AuthRepository, private readonly jwtService: JwtService,
    private readonly hashingService: HashingService
  ) {
  }


  public async register( registerUserDto: RegisterUserDto ): Promise<any> {
    return await this.authRepository.registerUser(registerUserDto);
  }


  public async login( loginDto: LoginDto ): Promise<TokenDto> {
    const auth = await this.authRepository.findByUid(loginDto.uid);

    const tokens: TokenDto = await this.jwtService.getTokens(auth);

    const hashedRefreshToken: string = await this.hashingService.hashingTarget(tokens.refresh_token);

    await this.authRepository.updateCurrentRefreshToken(auth.id, hashedRefreshToken);

    return tokens;
  }


  public async refreshAccessToken( user: any, refresh_token: string ): Promise<Pick<TokenDto, "access_token">> {
    const auth = await this.authRepository.findByUid(user.uid);
    if ( !auth ) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    const isRefreshTokenMatching = await this.hashingService.compare(refresh_token, auth.currentRefreshToken);
    if ( !isRefreshTokenMatching ) {
      throw new HttpException("Refresh token mismatch", HttpStatus.UNAUTHORIZED);
    }

    const refreshedAccessToken: string = await this.jwtService.getTokens(auth)
                                                   .then(tokens => tokens.access_token);

    return {
      access_token: refreshedAccessToken
    };
  }
}
