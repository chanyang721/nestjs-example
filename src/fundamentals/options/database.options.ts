import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions }   from "@nestjs/typeorm";
import { PROD }                        from "../../constants";
import { CatsEntity }                  from "../../domain/cats/entities/cat.entity";


export const typeOrmOptions: TypeOrmModuleAsyncOptions = {
  imports   : [ ConfigModule ],
  inject    : [ ConfigService ],
  useFactory: ( configService: ConfigService ) => ( {
    type       : "mysql",
    host       : process.env.DB_HOST || configService.get("DB_HOST"),
    port       : +process.env.DB_PORT || +configService.get<number>("DB_PORT"),
    username   : process.env.DB_USERNAME || configService.get("DB_USERNAME"),
    password   : process.env.DB_PASSWORD || configService.get("DB_PASSWORD"),
    database   : process.env.DB_DATABASE || configService.get("DB_DATABASE"),
    synchronize: process.env.NODE_ENV !== PROD,
    entities   : [ CatsEntity ],
    timezone   : "Z"
  } )
};