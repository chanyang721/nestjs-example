import { Module }                    from "@nestjs/common";
import { TypeOrmModule }                                            from "@nestjs/typeorm";
import { dAppTypeOrmModuleAsyncOptions, typeOrmModuleAsyncOptions } from "./orm/typeorm/options/typeorm.module.options";



@Module( {
    imports  : [
        /**
         * Command RDBMS Database
         */
        TypeOrmModule.forRootAsync( typeOrmModuleAsyncOptions ),
        TypeOrmModule.forRootAsync( dAppTypeOrmModuleAsyncOptions )
        
        
        /**
         * Query MongoDB Database
         */
        // MongooseModule.forRootAsync( mainMongooseModuleAsyncOptions )
    ],
    providers: []
} )
export class DatabaseModule {
}
