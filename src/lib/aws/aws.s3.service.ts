import { Inject, Injectable }  from "@nestjs/common";
import { CACHE_MANAGER }       from "@nestjs/cache-manager";
import { Cache }               from "cache-manager";
import { SharedConfigService } from "../config/shared.config.service";



@Injectable()
export class AwsS3Service {
  // private readonly s3: S3

  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private readonly awsConfigService: SharedConfigService
  ) {}


}
