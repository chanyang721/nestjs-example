import { Injectable }             from '@nestjs/common'
import { AwsConfigService } from './aws.config.service'



@Injectable()
export class AwsS3Service {
    // private readonly s3: S3

    constructor(
        private readonly awsConfigService: AwsConfigService
    ) {}


}