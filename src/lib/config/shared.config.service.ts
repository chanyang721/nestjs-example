import { Injectable }       from '@nestjs/common'
import { ConfigService }    from '@nestjs/config'



@Injectable()
export class SharedConfigService {
    constructor(
        private readonly configService: ConfigService
    ) {}

    get accessAwsConfig() {
        return {
            region         : this.configService.get<string>('AWS_REGION'),
            accessKeyId    : this.configService.get<string>('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
        }
    }

    get accessAwsS3Config() {
        return {

        }
    }

    get accessAwsSnsConfig() {
        return {

        }
    }

    get accessAwsSqsConfig() {
        return {
            region: this.configService.get<string>('AWS_REGION'),
            endpoint: this.configService.get<string>('AWS_ENDPOINT'),
            credentials: {
                accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
            },
        }
    }


    get accessAwsCognitoConfig() {
        return {
            clientId: this.configService.get<string>('AWS_COGNITO_CLIENT_ID'),
            userPoolId  : this.configService.get<string>('AWS_COGNITO_USER_POOL_ID'),
        }
    }


    get OpenApiConfig() {
        return {
            serviceKey: this.configService.get<string>('OPEN_API_SERVICE_KEY'),
            baseUrl: this.configService.get<string>('OPEN_API_BASE_URL'),
            statusApi: this.configService.get<string>('OPEN_API_STATUS_PATH'),
        }
    }
}



