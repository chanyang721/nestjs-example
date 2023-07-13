import { Injectable }          from "@nestjs/common";
import { SharedConfigService } from "../configuration/shared.config.service";



@Injectable()
export class AwsS3Service {
  // private readonly s3: S3

  constructor(
    private readonly sharedConfigService: SharedConfigService
  ) {
  }

}
