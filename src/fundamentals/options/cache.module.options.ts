import { StoreConfig }             from "cache-manager";
import { ConfigService }           from "@nestjs/config";
import { CacheModuleAsyncOptions } from "@nestjs/common";
import { redisStore }              from "cache-manager-redis-yet";
import { RedisClientOptions }      from "redis";



export const cacheModuleAsyncOptions: CacheModuleAsyncOptions<StoreConfig> = {
  isGlobal  : true,
  inject    : [ ConfigService ],
  useFactory: async( configService: ConfigService ) => ( {
    store   : await redisStore({
      url: configService.get("REDIS_URL"),
    } as RedisClientOptions),
    ttl     : configService.get<number>("CACHE_TTL"),
    max     : configService.get<number>("CACHE_MAX"),
    host    : configService.get<string>("REDIS_HOST"),
    port    : configService.get("REDIS_PORT"),
    // password: configService.get("REDIS_PASSWORD")
  } )
};
