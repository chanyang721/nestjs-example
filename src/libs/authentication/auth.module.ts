import { Module }                 from '@nestjs/common';
import { PassportModule }         from '@nestjs/passport';
import { JwtModule }              from '@nestjs/jwt';
import { PROJECT }               from '../utils/constants';
import { JwtService }            from '../helpers/jwt/jwt.service';
import { jwtModuleAsyncOptions } from '../helpers/jwt/jwt.module.option';
import { HashingService }        from '../helpers/hashing/hashing.service';
import { RepositoryModule }      from '../database/orm/typeorm/repository.module';
import { CommonConfigService }   from '../config/common.config.service';
import { JwtAuthGlobalStrategy } from '../fundamentals/guards/global/jwt.auth.global.strategy';
import { LocalAuthStrategy }      from '../fundamentals/guards/local/local.auth.strategy';
import { JwtAuthRefreshStrategy } from '../fundamentals/guards/local/jwt.refresh.strategy';
import { AuthController }         from './presentation/controllers/auth.controller';
import { AuthService }            from './application/services/auth.service';
import { FirebaseService }        from './infrastructure/platforms/firebase/firebase.service';
import { AuthRepository }         from './infrastructure/repositories/auth.repository';
import { UserCommandRepository }  from '../../domain/users/infrastructure/repositories/user.command.repository';



@Module( {
    imports    : [
        PassportModule,
        
        JwtModule.registerAsync( jwtModuleAsyncOptions ),
        
        RepositoryModule.forFeature( [ UserCommandRepository, AuthRepository ], PROJECT ),
    ],
    controllers: [
        AuthController,
    ],
    providers  : [
        CommonConfigService,
        
        AuthService, FirebaseService,
        
        JwtService, HashingService,
        
        JwtAuthGlobalStrategy, LocalAuthStrategy, JwtAuthRefreshStrategy,
    ],
} )
export class AuthModule {
}
