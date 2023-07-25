import { Injectable }          from "@nestjs/common";
import { CommonConfigService } from "../configuration/common.config.service";



@Injectable()
export class AwsS3Service {
  // private readonly s3: S3

  constructor(
    private readonly commonConfigService: CommonConfigService
  ) {
  }

}
