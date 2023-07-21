import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { MAIN, PRODUCTION }          from "../../utils/constants";
import { SqlLogger }                 from "./typeorm.logger.options";
import { UserEntity } from "../../../domain/user/infrastructure/entities/user.entity";
import { AuthEntity } from "../../authentication/infrastructure/entities/auth.entity";
import { ProjectEntity }               from "../../../domain/project/infrastructure/entities/project.entity";
import { GroupEntity }                 from "../../../domain/project/infrastructure/entities/group.entity";
import { FileEntity }                  from "../../../domain/project/infrastructure/entities/file.entity";



export const mainTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports   : [ ConfigModule ],
  inject    : [ ConfigService ],
  name      : MAIN,
  useFactory: ( configService: ConfigService ) => ( {
    type       : "mysql",
    host       : configService.get<string>("MYSQL_MAIN_CONTAINER_NAME") || configService.get<string>("MYSQL_DB_HOST"),
    port       : +process.env.MYSQL_DB_PORT || +configService.get<number>("MYSQL_MAIN_DB_PORT"),
    username   : process.env.MYSQL_DB_USERNAME || configService.get<string>("MYSQL_DB_USERNAME"),
    password   : process.env.MYSQL_DB_PASSWORD || configService.get<string>("MYSQL_DB_PASSWORD"),
    database   : process.env.MYSQL_DB_DATABASE || configService.get<string>("MYSQL_MAIN_DB_DATABASE"),
    synchronize: process.env.NODE_ENV !== PRODUCTION,
    logger     : new SqlLogger(),
    logging    : process.env.NODE_ENV !== PRODUCTION,
    entities   : [
      AuthEntity, UserEntity,

      ProjectEntity, GroupEntity, FileEntity
    ],
    timezone   : "Z"
  } )
};
