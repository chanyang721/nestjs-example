import { APP_INTERCEPTOR }                from "@nestjs/core";
import { Module }                         from "@nestjs/common";
import { TypeOrmModule }                  from "@nestjs/typeorm";
import { MongooseModule }                 from "@nestjs/mongoose";
import { CacheInterceptor, CacheModule }  from "@nestjs/cache-manager";
import { mainTypeOrmModuleAsyncOptions }  from "./options/typeorm.module.options";
import { mainMongooseModuleAsyncOptions } from "./options/mongoose.module.options";
import { cacheModuleAsyncOptions }        from "./options/cache.module.options";



@Module({
  imports  : [
    /**
     * Command MySQL Database
     */
    TypeOrmModule.forRootAsync(mainTypeOrmModuleAsyncOptions),

    /**
     * Query Cache Redis
     */
    CacheModule.registerAsync(cacheModuleAsyncOptions),

    /**
     * Query MongoDB Database
     */
    MongooseModule.forRootAsync(mainMongooseModuleAsyncOptions)
  ],
  exports  : [],
  providers: [
    {
      provide : APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class DatabaseModule {
}
