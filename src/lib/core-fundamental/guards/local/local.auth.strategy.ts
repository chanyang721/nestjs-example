import { HttpException, Injectable } from "@nestjs/common";
import { PassportStrategy }          from "@nestjs/passport";
import { Strategy }          from "passport-local";
import { FirebaseService }   from "../../../authentication/infrastructure/authentication/firebase/firebase.service";



@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  private readonly firebaseClient: any;


  constructor(
    private readonly firebaseService: FirebaseService
  ) {
    super({
      usernameField: "uid",
      passwordField: "id_token"
    });
    this.firebaseClient = firebaseService.getFirebaseClient();
  }


  async validate( uid: string, id_token: string ): Promise<any> {
    try {
      const decodedFirebaseToken = this.firebaseClient.auth()
                                       .verifyIdToken(id_token);
      console.log(decodedFirebaseToken)

      return {
        uid,
        ...decodedFirebaseToken
      };
    }
    catch ( e ) {
      console.log(e)
      throw new HttpException(e.message, 401)
    }
  }
}

