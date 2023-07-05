import { Injectable }          from "@nestjs/common";
import { SharedConfigService } from "../config/shared.config.service";



@Injectable()
export class AwsCognitoService {

  constructor(
    private readonly sharedConfigService: SharedConfigService
  ) {
  }


  get accessToAwsCognito() {
    const { clientId, userPoolId } = this.sharedConfigService.accessAwsCognitoConfig;
    return;
  }
}