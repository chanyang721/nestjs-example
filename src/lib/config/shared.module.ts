import { Global, Module }    from '@nestjs/common'
import { AwsS3Service }      from '../aws/aws.s3.service'
import { AwsCognitoService } from "../aws/aws.cognito.service";


@Global()
@Module({
    imports  : [],
    exports  : [],
    providers: [
        AwsS3Service,
        AwsCognitoService
    ],
})
export class SharedModule {

}
