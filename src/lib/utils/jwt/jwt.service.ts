import { Injectable }                                          from "@nestjs/common";
import { JwtService as OriginJwtService, JwtSignOptions }      from "@nestjs/jwt";
import { COOKIE_ACCESS_TOKEN_NAME, COOKIE_REFRESH_TOKEN_NAME } from "../constant";
import { IJwtPayLoad }                                         from "./interface/jwt.payload.interface";
import { IToken }                                              from "../../authentication/presentation/interface/token.interface";
import { SharedConfigService }                                 from "../../configuration/shared.config.service";



@Injectable()
export class JwtService {
  private readonly jwtConfig = this.sharedConfigService.JwtConfig;


  constructor(
    private readonly originJwtService: OriginJwtService,
    private readonly sharedConfigService: SharedConfigService,
  ) {
  }


  async refreshAccessToken( user: any ) {
    const { access_token } = await this.getTokens(user.id);
    return { access_token };
  }


  private async generateToken( payload: IJwtPayLoad, options: JwtSignOptions ) {
    return this.originJwtService.sign(payload, options);
  }


  public async validateToken( token: string ): Promise<any> {
    return this.originJwtService.verify(token);
  }


  public async getTokens( payloadSource: any, subject?: string ): Promise<IToken> {
    const tokens: IToken = new IToken();
    const payload: IJwtPayLoad = await this.generatePayload(payloadSource);

    tokens.access_token = await this.generateToken(payload, {
      expiresIn: this.jwtConfig.accessTokenExpiresIn,
      subject  : COOKIE_ACCESS_TOKEN_NAME
    });

    tokens.refresh_token = await this.generateToken(payload, {
      expiresIn: this.jwtConfig.refreshTokenExpiresIn,
      subject  : COOKIE_REFRESH_TOKEN_NAME
    });

    return tokens;
  }

  private async generatePayload( payload: any ): Promise<IJwtPayLoad> {
    // const [ id ] = await Promise.all([
    //   this.hashingService.hashingTarget(payload.id)
    // ])

    return {
      id: payload.id
    }
  }

  /**
   * 에러: true
   * !에러: false
   */
  async isExpiredToken( token: string ): Promise<null | boolean> {
    try {
      await this.validateToken(token);
      return false;
    }
    catch ( e ) {
      return e.name === "TokenExpiredError";
    }
  }

}
