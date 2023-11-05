import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions }   from "@nestjs/typeorm";
import { FileEntity }                  from "../../../../../domain/projects/infrastructure/entities/file.entity";
import { GroupEntity }                 from "../../../../../domain/projects/infrastructure/entities/group.entity";
import { ProjectEntity }               from "../../../../../domain/projects/infrastructure/entities/project.entity";
import { UserEntity }                  from "../../../../../domain/users/infrastructure/entities/user.entity";
import { AuthEntity }                  from "../../../../authentication/infrastructure/entities/auth.entity";
import { PRODUCTION, PROJECT }         from "../../../../utils/constants";
import { SqlLogger }                   from "./typeorm.logger.options";



export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
    // imports   : [ ConfigModule ],
    inject    : [ ConfigService ],
    name      : PROJECT,
    useFactory: ( configService: ConfigService ) => ( {
        type       : "mysql",
        host       : configService.get<string>( "DB_CONTAINER_HOST" ),
        port       : configService.get<number>( "DB_PORT" ),
        username   : configService.get<string>( "DB_USER" ),
        password   : configService.get<string>( "DB_PASSWORD" ),
        database   : configService.get<string>( "DB_DATABASE" ),
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