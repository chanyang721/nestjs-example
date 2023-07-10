import { Injectable }          from "@nestjs/common";
import { SharedConfigService } from "../configuration/shared.config.service";



@Injectable()
export class AwsCognitoService {

  constructor(
    private readonly sharedConfigService: SharedConfigService
  ) {
  }


  get getAwsCognitoClient() {
    return
  }
}
