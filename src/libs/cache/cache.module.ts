import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module }                        from "@nestjs/common";
import { APP_INTERCEPTOR }               from "@nestjs/core";
import { cacheModuleAsyncOptions }       from "./options/cache.module.options";



@Module( {
    imports  : [
        /**
         * infra caching
         */
        CacheModule.registerAsync( cacheModuleAsyncOptions ),
        
        /**
         * local caching
         */
        CacheModule.register( { isGlobal: true } )
    ],
    providers: [
        {
            provide : APP_INTERCEPTOR,
            useClass: CacheInterceptor
        }
    ]
} )
export class RedisCacheModule {

}