import { Module }                                                          from "@nestjs/common";
import { TypeOrmModule }                                                   from "@nestjs/typeorm";
import { MongooseModule }                                                  from "@nestjs/mongoose";
import { mainTypeOrmModuleAsyncOptions, supportTypeOrmModuleAsyncOptions } from "./options/typeorm.module.options";
import { mainMongooseModuleAsyncOptions }                                  from "./options/mongoose.module.options";
import { CacheModule }                                                     from "@nestjs/cache-manager";
import { cacheModuleAsyncOptions }                                         from "./options/cache.module.options";



@Module({
  imports  : [
    /**
     * TODO: Command MySQL Database
     */
    TypeOrmModule.forRootAsync(mainTypeOrmModuleAsyncOptions),
    TypeOrmModule.forRootAsync(supportTypeOrmModuleAsyncOptions),

    /**
     * TODO: Cache Redis
     */
    CacheModule.registerAsync(cacheModuleAsyncOptions),

    /**
     * TODO: Query MongoDB Database
     */
    MongooseModule.forRootAsync(mainMongooseModuleAsyncOptions)
  ],
  exports  : [],
  providers: [
    // {
    //   provide : APP_INTERCEPTOR,
    //   useClass: CacheInterceptor
    // }
  ]
})
export class DatabaseModule {
}
