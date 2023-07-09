import { Injectable }          from "@nestjs/common";
import { SharedConfigService } from "../configuration/shared.config.service";



@Injectable()
export class AwsSqsService {

  constructor( private readonly awsConfigService: SharedConfigService ) {
  }

}
