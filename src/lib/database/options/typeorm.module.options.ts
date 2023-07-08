import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { SqlLogger }                 from "./typeorm.logger.options";
import { CatEntity }                 from "../../../domain/cat/intrastructure/entitiy/cat.command.entity";
import { PRODUCTION }                from "../../constant";



export const typeOrmModuleAsyncOptionsMain: TypeOrmModuleAsyncOptions = {
  imports   : [ ConfigModule ],
  inject    : [ ConfigService ],
  name      : "main",
  useFactory: ( configService: ConfigService ) => ( {
    type       : "mysql",
    host       : process.env.MYSQL_DB_HOST || configService.get<string>("MYSQL_DB_HOST"),
    port       : +process.env.MYSQL_DB_PORT || +configService.get<number>("MYSQL_DB_PORT"),
    username   : process.env.MYSQL_DB_USERNAME || configService.get<string>("MYSQL_DB_USERNAME"),
    password   : process.env.MYSQL_DB_PASSWORD || configService.get<string>("MYSQL_DB_PASSWORD"),
    database   : process.env.MYSQL_DB_DATABASE || configService.get<string>("MYSQL_DB_DATABASE"),
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    logger     : new SqlLogger(),
    entities   : [ CatEntity ],
    timezone   : "Z"
  } )
};

export const typeOrmModuleAsyncOptionsSupport: TypeOrmModuleAsyncOptions = {
  imports   : [ ConfigModule ],
  inject    : [ ConfigService ],
  name      : "support",
  useFactory: ( configService: ConfigService ) => ( {
    type       : "mysql",
    host       : process.env.MYSQL_DB_HOST || configService.get<string>("MYSQL_DB_HOST"),
    port       : +process.env.MYSQL_DB_PORT || +configService.get<number>("MYSQL_DB_PORT"),
    username   : process.env.MYSQL_DB_USERNAME || configService.get<string>("MYSQL_DB_USERNAME"),
    password   : process.env.MYSQL_DB_PASSWORD || configService.get<string>("MYSQL_DB_PASSWORD"),
    database   : "support",
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    logger     : new SqlLogger(),
    entities   : [ CatEntity ],
    timezone   : "Z"
  } )
};
