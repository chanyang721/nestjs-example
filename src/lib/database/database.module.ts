import { Module }                        from "@nestjs/common";
import { TypeOrmModule }                 from "@nestjs/typeorm";
import { MongooseModule }                from "@nestjs/mongoose";
import { CacheModule }                   from "@nestjs/cache-manager";
import { typeOrmModuleAsyncOptions }     from "./options/typeorm.module.options";
import { cacheModuleAsyncOptions }       from "./options/cache.module.options";
import { catMongooseModuleAsyncOptions } from "./options/mongoose.module.options";



@Module({
  imports  : [
    /**
     * TODO: Command MySQL Database
     */
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),

    /**
     * TODO: Cache Redis
     */
    CacheModule.registerAsync(cacheModuleAsyncOptions),

    /**
     * TODO: Query MongoDB Database
     */
    MongooseModule.forRootAsync(catMongooseModuleAsyncOptions)
  ],
  exports  : [],
  providers: []
})
export class DatabaseModule {
}