import { Injectable }        from "@nestjs/common";
import { PassportStrategy }  from "@nestjs/passport";
import { Strategy }          from "passport-local";
import { AwsCognitoService } from "../../../aws/aws.cognito.service";
// import { CatCommandService } from "../../../../domain/cat/application/service/cat.command.service";



@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  private cognitoConnection = this.awsCognitoService.accessToAwsCognito;


  constructor(
    // private readonly catsService: CatCommandService,
    private readonly awsCognitoService: AwsCognitoService
  ) {
    super({
      usernameField: "email",
      passwordField: "password"
    });
  }


  async validate( email: string, password: string ): Promise<any> {
    try {
      /**
       * 1. cognito connection으로 입력된 email, password로 유저 조회
       * 2.
       */

      return {};
    }
    catch ( e ) {
      /**
       * 1. 에러 처리
       * 2.
       */
    }
  }

}

