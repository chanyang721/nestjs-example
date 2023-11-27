import { Module }                    from "@nestjs/common";
import { TypeOrmModule }             from "@nestjs/typeorm";
import { typeOrmModuleAsyncOptions } from "./orm/typeorm/options/typeorm.module.options";



@Module( {
    imports  : [
        /**
         * Command RDBMS Database
         */
        TypeOrmModule.forRootAsync( typeOrmModuleAsyncOptions )
        // TypeOrmModule.forRootAsync( blockChainTypeOrmModuleAsyncOptions ),
        
        
        /**
         * Query MongoDB Database
         */
        // MongooseModule.forRootAsync( mainMongooseModuleAsyncOptions )
    ],
    providers: []
} )
export class DatabaseModule {
}
