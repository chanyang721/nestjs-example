import { Module }                         from "@nestjs/common";
import { MongooseModule }                 from "@nestjs/mongoose";
import { TypeOrmModule }                  from "@nestjs/typeorm";
import { CommonConfigService }            from "../config/common.config.service";
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
         * Query MongoDB Database
         */
        // MongooseModule.forRootAsync( mainMongooseModuleAsyncOptions )
    ],
    providers: [  ]
} )
export class DatabaseModule {
}
