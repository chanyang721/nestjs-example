import * as firebase           from "firebase-admin";
import { Injectable }          from "@nestjs/common";
import { SharedConfigService } from "../../../../configuration/shared.config.service";


@Injectable()
export class FirebaseService {
  private readonly firebaseClient: any;


  constructor(
    private readonly sharedConfigService: SharedConfigService
  ) {
    this.firebaseClient = firebase.initializeApp({
      credential: firebase.credential.cert(sharedConfigService.accessFirebaseConfig)
    });
  }


  public getFirebaseClient() {
    return this.firebaseClient;
  }
}
