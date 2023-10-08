import { Module }                 from '@nestjs/common';
import { PassportModule }         from '@nestjs/passport';
import { JwtModule }              from '@nestjs/jwt';
import { MAIN }                   from '../utils/constants';
import { JwtService }             from '../utils/jwt/jwt.service';
import { jwtModuleAsyncOptions }  from '../utils/jwt/jwt.module.option';
import { HashingService }         from '../utils/hashing/hashing.service';
import { RepositoryModule }       from '../database/orm/typeorm/repository.module';
import { CommonConfigService }    from '../configuration/common.config.service';
import { JwtAuthGlobalStrategy }  from '../core-fundamentals/guards/global/jwt.auth.global.strategy';
import { LocalAuthStrategy }      from '../core-fundamentals/guards/local/local.auth.strategy';
import { JwtAuthRefreshStrategy } from '../core-fundamentals/guards/local/jwt.refresh.strategy';
import { AuthController }         from './presentation/controllers/auth.controller';
import { AuthService }            from './application/services/auth.service';
import { FirebaseService }        from './infrastructure/platforms/firebase/firebase.service';
import { AuthRepository }         from './infrastructure/repositories/auth.repository';
import { UserCommandRepository }  from '../../domain/users/infrastructure/repositories/user.command.repository';



@Module( {
    imports    : [
        PassportModule,
        
        JwtModule.registerAsync( jwtModuleAsyncOptions ),
        
        RepositoryModule.forFeature( [ UserCommandRepository, AuthRepository ], MAIN ),
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
