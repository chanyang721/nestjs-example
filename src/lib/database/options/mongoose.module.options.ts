import { MongooseModuleAsyncOptions } from "@nestjs/mongoose/dist/interfaces/mongoose-options.interface";



export const catMongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  imports   : [],
  inject    : [],
  connectionName: "cats",
  useFactory: () => ( {
    uri: "mongodb://localhost:27017/nest",
  } )
};