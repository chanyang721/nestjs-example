import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions }   from '@nestjs/typeorm';
import { BOARD, PRODUCTION, PROJECT }  from '../../../../utils/constants';
import { SqlLogger }                   from './typeorm.logger.options';
import { UserEntity }                  from '../../../../../domain/users/infrastructure/entities/user.entity';
import { AuthEntity }                  from '../../../../authentication/infrastructure/entities/auth.entity';
import { ProjectEntity }               from '../../../../../domain/projects/infrastructure/entities/project.entity';
import { GroupEntity }                 from '../../../../../domain/projects/infrastructure/entities/group.entity';
import { FileEntity }                  from '../../../../../domain/projects/infrastructure/entities/file.entity';



export const projectTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
    imports   : [ ConfigModule ],
    inject    : [ ConfigService ],
    name      : PROJECT,
    useFactory: ( configService: ConfigService ) => ( {
        type       : 'mysql',
        host       : configService.get<string>( 'MYSQL_MAIN_CONTAINER_NAME' ),
        port       : +configService.get<number>( 'MYSQL_MAIN_DB_PORT' ),
        username   : configService.get<string>( 'MYSQL_DB_USERNAME' ),
        password   : configService.get<string>( 'MYSQL_DB_PASSWORD' ),
        database   : configService.get<string>( 'MYSQL_MAIN_DB_DATABASE' ),
        synchronize: process.env.NODE_ENV !== PRODUCTION,
        logger     : new SqlLogger(),
        logging    : process.env.NODE_ENV !== PRODUCTION,
        entities   : [
            AuthEntity, UserEntity,
            
            ProjectEntity, GroupEntity, FileEntity,
        ],
        timezone   : 'Z',
    } ),
};

export const boardTypeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
    imports   : [ ConfigModule ],
    inject    : [ ConfigService ],
    name      : BOARD,
    useFactory: ( configService: ConfigService ) => ( {
        type       : 'mariadb',
        host       : configService.get<string>( 'DB_CONTAINER_NAME' ),
        password   : configService.get<string>( 'DB_ROOT_PASSWORD' ),
        dbName     : configService.get<string>( 'DB_NAME' ),
        port       : +configService.get<number>( 'DB_PORT' ),
        user       : configService.get<string>( 'DB_USER' ),
        synchronize: process.env.NODE_ENV !== PRODUCTION,
        logger     : new SqlLogger(),
        logging    : process.env.NODE_ENV !== PRODUCTION,
        entities   : [
        
        ],
        timezone   : 'Z',
    } ),
};

