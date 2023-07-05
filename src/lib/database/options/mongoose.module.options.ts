import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModuleAsyncOptions }  from "@nestjs/mongoose";



export const mongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  imports       : [ ConfigModule ],
  inject        : [ ConfigService ],
  connectionName: "one",
  useFactory    : ( configService: ConfigService ) => ( {
    uri          : process.env.MONGO_DB_URI || configService.get<string>("MONGO_DB_URL"),
    retryAttempts: 3,
    retryDelay   : 3000
  } )
};