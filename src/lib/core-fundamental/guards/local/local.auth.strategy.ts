import { Injectable }        from "@nestjs/common";
import { PassportStrategy }  from "@nestjs/passport";
import { Strategy }          from "passport-local";
import { AwsCognitoService } from "../../../aws/aws.cognito.service";
import { FirebaseService }   from "../../../authentication/infrastructure/authentication/firebase/firebase.service";



@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  private readonly firebaseClient: any;


  constructor( private readonly awsCognitoService: AwsCognitoService,
    private readonly firebaseService: FirebaseService
  ) {
    super({
      usernameField: "uid",
      passwordField: "id_token"
    });
    this.firebaseClient = firebaseService.getFirebaseClient();
  }


  async validate( uid: string, id_token: string ): Promise<any> {
    const decodedFirebaseToken = this.firebaseClient.auth()
                                     .verifyIdToken(id_token);

    return {
      uid,
      id_token, ...decodedFirebaseToken
    };
  }

}

