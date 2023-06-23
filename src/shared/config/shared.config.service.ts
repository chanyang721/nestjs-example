import { Injectable }       from '@nestjs/common'
import { ConfigService }    from '@nestjs/config'



@Injectable()
export class SharedConfigService {
    constructor(
        private readonly configService: ConfigService
    ) {}


    get OpenApiConfig() {
        return {
            serviceKey: this.configService.get<string>('OPEN_API_SERVICE_KEY'),
            baseUrl: this.configService.get<string>('OPEN_API_BASE_URL'),
            statusApi: this.configService.get<string>('OPEN_API_STATUS_PATH'),
        }
    }
}



