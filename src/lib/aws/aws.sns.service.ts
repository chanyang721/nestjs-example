import { Injectable }          from "@nestjs/common";
import { CommonConfigService } from "../configuration/common.config.service";



@Injectable()
export class AwsSnsService {

  constructor( private readonly commonConfigService: CommonConfigService ) {
  }

}
