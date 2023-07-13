import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModuleAsyncOptions } from "@nestjs/mongoose";
import { MAIN }                       from "../../utils/constants";



export const mainMongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  imports       : [ ConfigModule ],
  inject        : [ ConfigService ],
  connectionName: MAIN,
  useFactory    : ( configService: ConfigService ) => ( {
    //  uri: configService.get<string>("MONGO_DB_URL")
    uri          : configService.get<string>("MONGO_DB_CONTAINER_URL"),
    retryAttempts: 3,
    retryDelay   : 3000
  } )
};
