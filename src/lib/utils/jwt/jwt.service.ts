import { Injectable }                                          from "@nestjs/common";
import { JwtService as OriginJwtService, JwtSignOptions }      from "@nestjs/jwt";
import { IToken }                                              from "../../authentication/presentation/interface/token.interface";
import { COOKIE_ACCESS_TOKEN_NAME, COOKIE_REFRESH_TOKEN_NAME } from "../constant";
import { SharedConfigService }                                 from "../../configuration/shared.config.service";
import { IJwtPayLoad }                                         from "./interface/jwt.payload.interface";



@Injectable()
export class JwtService extends OriginJwtService {
  // TODO: shared config service 읽지 못하는 에러 있음
  // private readonly jwtConfig: any = this.sharedConfigService.JwtConfig;


  constructor(
    private readonly sharedConfigService: SharedConfigService,
  ) {
    super();
  }


  async refreshAccessToken( user: any ) {
    const { access_token } = await this.getTokens(user.id);
    return { access_token };
  }


  private async generateToken( payload: IJwtPayLoad, options: JwtSignOptions ) {
    return this.sign(payload, options);
  }


  private async validateToken( token: string ) {
    return this.verify(token);
  }


  public async getTokens( authId: string ): Promise<IToken> {
    const access_token = await this.generateToken({
      id: authId
    }, {
      // expiresIn: this.jwtConfig.AccessTokenExpiresIn,
      expiresIn: '2m',
      subject  : COOKIE_ACCESS_TOKEN_NAME
    });

    const refresh_token = await this.generateToken({
      id: authId
    }, {
      // expiresIn: this.jwtConfig.RefreshTokenExpiresIn,
      expiresIn: '30d',
      subject  : COOKIE_REFRESH_TOKEN_NAME
    });

    return {
      access_token,
      refresh_token
    };
  }


  async isExpiredToken( token: string ): Promise<null | boolean> {
    try {
      // 에러 시 true
      // 에러 아닐 시 false
      await this.validateToken(token);
      return false;
    }
    catch ( e ) {
      return e.name === "TokenExpiredError";
    }
  }

}
