import { Injectable }             from '@nestjs/common';
import { AuthenticationPlatform } from '../entities/enums/auth.enum.platform';



@Injectable()
export class PlatformService<Platform = typeof AuthenticationPlatform> {
    private readonly platformClient: any;
    
    
    constructor(
        private readonly platform: Platform,
    ) {
        /**
         * TODO: 플랫폼에 따른 auth 클라이언트 생성 class
         */
    }
}
