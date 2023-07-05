import { APP_INTERCEPTOR }               from "@nestjs/core";
import { Module }                        from "@nestjs/common";
import { TypeOrmModule }                 from "@nestjs/typeorm";
import { MongooseModule }                from "@nestjs/mongoose";
import { CacheInterceptor, CacheModule }                               from "@nestjs/cache-manager";
import { typeOrmModuleAsyncOptions, typeOrmModuleAsyncOptionsSupport } from "./options/typeorm.module.options";
import { cacheModuleAsyncOptions }                                     from "./options/cache.module.options";
import { mongooseModuleAsyncOptions }    from "./options/mongoose.module.options";



@Module({
  imports  : [
    /**
     * TODO: Command MySQL Database
     */
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptionsSupport),

    /**
     * TODO: Cache Redis
     */
    CacheModule.registerAsync(cacheModuleAsyncOptions),

    /**
     * TODO: Query MongoDB Database
     */
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions)
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