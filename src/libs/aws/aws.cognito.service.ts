import { Injectable }          from "@nestjs/common";
import { CommonConfigService } from "../configuration/common.config.service";



@Injectable()
export class AwsCognitoService {

  constructor(
    private readonly commonConfigService: CommonConfigService
  ) {
  }


  get getAwsCognitoClient() {
    return
  }
}
