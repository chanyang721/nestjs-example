import { CacheModuleAsyncOptions } from "@nestjs/cache-manager/dist/interfaces/cache-module.interface";
import { StoreConfig }             from "cache-manager";
import { ConfigService }           from "@nestjs/config";



export const cacheModuleAsyncOptions: CacheModuleAsyncOptions<StoreConfig> = {
  isGlobal  : true,
  inject    : [ ConfigService ],
  useFactory: async (configService: ConfigService) => ( {
    ttl : 5,
    max : 10,
    host: "localhost",
    port: 6379
  } )
};