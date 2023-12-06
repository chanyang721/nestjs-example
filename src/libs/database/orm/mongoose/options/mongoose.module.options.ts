import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModuleAsyncOptions }  from "@nestjs/mongoose";



export const mainMongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
    imports       : [ ConfigModule ],
    inject        : [ ConfigService ],
    useFactory    : ( configService: ConfigService ) => ( {
        uri          : configService.get<string>( "MONGO_DB_CONTAINER_URL" ),
        retryAttempts: 3,
        retryDelay   : 3000
    } )
};
