import { Module }                    from "@nestjs/common";
import { TypeOrmModule }                                                                            from "@nestjs/typeorm";
import { boardTypeOrmModuleAsyncOptions, dAppTypeOrmModuleAsyncOptions, typeOrmModuleAsyncOptions } from "./orm/typeorm/options/typeorm.module.options";



@Module( {
    imports  : [
        TypeOrmModule.forRootAsync( typeOrmModuleAsyncOptions ),
        TypeOrmModule.forRootAsync( dAppTypeOrmModuleAsyncOptions ),
        TypeOrmModule.forRootAsync( boardTypeOrmModuleAsyncOptions ),
        // MongooseModule.forRootAsync( mainMongooseModuleAsyncOptions )
    ],
    providers: []
} )
export class DatabaseModule {
}
