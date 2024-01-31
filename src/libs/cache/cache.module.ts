import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import * as redisStore from "cache-manager-redis-store";



@Module( {
    imports  : [
        /* infra caching */
        CacheModule.register( {
            isGlobal  : true,
            useFactory: async ( configService: ConfigService ) => ( {
                store: redisStore,
                host : configService.get<string>( "REDIS_CONTAINER_HOST" ),
                port : configService.get<number>( "REDIS_PORT" ),
                ttl  : configService.get<number>( "REDIS_TTL" ),
                max  : configService.get<number>( "REDIS_MAX" )
                // password: configService.get<string>( "REDIS_PASSWORD" ),
            } )
        } ),
        
        /* local caching */
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