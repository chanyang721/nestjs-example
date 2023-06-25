import { Injectable }    from '@nestjs/common'
import { ConfigService } from '@nestjs/config'



@Injectable()
export class AwsConfigService {
    constructor( private readonly configService: ConfigService ) {
    }

    get accessAwsConfig() {
        return {
            region         : this.configService.get<string>('AWS_REGION'),
            accessKeyId    : this.configService.get<string>('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
        }
    }

    get accessAwsS3BucketConfig() {
        return {

        }
    }

    get accessAwsCognitoConfig() {
        return {
            clientId: this.configService.get<string>('AWS_COGNITO_CLIENT_ID'),
            userPoolId  : this.configService.get<string>('AWS_COGNITO_USER_POOL_ID'),
        }
    }

}