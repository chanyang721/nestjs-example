import { Global, Module }      from '@nestjs/common'
import { AwsConfigService }    from './aws/aws.config.service'
import { SharedConfigService } from './config/shared.config.service'
import { AwsS3Service }        from './aws/aws.s3.service'


@Global()
@Module({
    imports  : [],
    exports  : [],
    providers: [
        AwsConfigService,
        SharedConfigService,
        AwsS3Service,
    ],
})
export class SharedModule {

}