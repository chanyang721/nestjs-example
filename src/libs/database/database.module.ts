import { CacheInterceptor, CacheModule }  from "@nestjs/cache-manager";
import { Module }                         from "@nestjs/common";
import { APP_INTERCEPTOR }                from "@nestjs/core";
import { MongooseModule }                 from "@nestjs/mongoose";
import { TypeOrmModule }                  from "@nestjs/typeorm";
import { mainMongooseModuleAsyncOptions } from "./orm/mongoose/options/mongoose.module.options";
import { typeOrmModuleAsyncOptions }      from "./orm/typeorm/options/typeorm.module.options";



@Module( {
    imports  : [
        /**
         * Command RDBMS Database
         */
        TypeOrmModule.forRootAsync( typeOrmModuleAsyncOptions ),
        // TypeOrmModule.forRootAsync( boardTypeOrmModuleAsyncOptions ),
        
        /**
         * Query Cache Redis
         */
        // CacheModule.registerAsync( cacheModuleAsyncOptions ),
        CacheModule.register( { isGlobal: true } ),
        
        /**
         * Query MongoDB Database
         */
        MongooseModule.forRootAsync( mainMongooseModuleAsyncOptions )
    ],
    exports  : [],
    providers: [
        {
            provide : APP_INTERCEPTOR,
            useClass: CacheInterceptor
        }
    ]
} )
export class DatabaseModule {
}
