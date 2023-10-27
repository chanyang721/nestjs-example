
import { CacheModuleAsyncOptions } from "@nestjs/cache-manager";
import { ConfigService }           from '@nestjs/config';
import { redisStore }              from "cache-manager-redis-store";


export const cacheModuleAsyncOptions: CacheModuleAsyncOptions = {
    isGlobal  : true,
    inject    : [ ConfigService ],
    useFactory: async ( configService: ConfigService ) => ( {
        store: redisStore,
        // host : configService.get<string>( 'REDIS_CONTAINER_HOST' ),
        host: 'localhost',
        port : configService.get<number>( 'REDIS_PORT' ),
        ttl  : configService.get<number>( 'REDIS_TTL' ),
        max  : configService.get<number>( 'REDIS_MAX' ),
        // password: configService.get("REDIS_PASSWORD")
    } ),
};
