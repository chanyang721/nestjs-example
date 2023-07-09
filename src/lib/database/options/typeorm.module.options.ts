import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { SqlLogger }                 from "./typeorm.logger.options";
import { CatEntity }                 from "../../../domain/cat/intrastructure/entitiy/cat.command.entity";
import { PRODUCTION }                from "../../constant";



export const mainTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports   : [ ConfigModule ],
  inject    : [ ConfigService ],
  name      : "main",
  useFactory: ( configService: ConfigService ) => ({
      type       : "mysql",
      host       : configService.get<string>("MYSQL_MAIN_CONTAINER_NAME") || configService.get<string>("MYSQL_DB_HOST"),
      port       : +process.env.MYSQL_DB_PORT || +configService.get<number>("MYSQL_MAIN_DB_PORT"),
      username   : process.env.MYSQL_DB_USERNAME || configService.get<string>("MYSQL_DB_USERNAME"),
      password   : process.env.MYSQL_DB_PASSWORD || configService.get<string>("MYSQL_DB_PASSWORD"),
      database   : process.env.MYSQL_DB_DATABASE || configService.get<string>("MYSQL_MAIN_DB_DATABASE"),
      synchronize: process.env.NODE_ENV !== PRODUCTION,
      logger     : new SqlLogger(),
      entities   : [ CatEntity ],
      timezone   : "Z"
    })
};

export const supportTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports   : [ ConfigModule ],
  inject    : [ ConfigService ],
  name      : "support",
  useFactory: ( configService: ConfigService ) => ( {
    type       : "mysql",
    host       : configService.get<string>("MYSQL_SUPPORT_CONTAINER_NAME") || configService.get<string>("MYSQL_DB_HOST"),
    port       : +process.env.MYSQL_DB_PORT || +configService.get<number>("MYSQL__SUPPORT_DB_PORT"),
    username   : process.env.MYSQL_DB_USERNAME || configService.get<string>("MYSQL_DB_USERNAME"),
    password   : process.env.MYSQL_DB_PASSWORD || configService.get<string>("MYSQL_DB_PASSWORD"),
    database   : process.env.MYSQL_DB_DATABASE || configService.get<string>("MYSQL_SUPPORT_DB_DATABASE"),
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    logger     : new SqlLogger(),
    entities   : [ CatEntity ],
    timezone   : "Z"
  } )
};
