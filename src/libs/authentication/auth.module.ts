import { Module }                 from "@nestjs/common";
import { JwtModule }              from "@nestjs/jwt";
import { PassportModule }         from "@nestjs/passport";
import { UserCommandRepository }  from "../../domain/users/infrastructure/repositories/user.command.repository";
import { CommonConfigService }    from "../config/common.config.service";
import { RepositoryModule }       from "../database/orm/typeorm/repository.module";
import { JwtAuthGlobalStrategy }  from "../fundamentals/guards/global/jwt.auth.global.strategy";
import { JwtAuthRefreshStrategy } from "../fundamentals/guards/local/jwt.refresh.strategy";
import { LocalAuthStrategy }      from "../fundamentals/guards/local/local.auth.strategy";
import { HashingService }         from "../helpers/hashing/hashing.service";
import { jwtModuleAsyncOptions }  from "../helpers/jwt/jwt.module.option";
import { JwtService }             from "../helpers/jwt/jwt.service";
import { PROJECT }                from "../utils/constants";
import { AuthService }            from "./application/services/auth.service";
import { FirebaseService }        from "./infrastructure/platforms/firebase/firebase.service";
import { AuthRepository }         from "./infrastructure/repositories/auth.repository";
import { AuthController }         from "./presentation/controllers/auth.controller";



@Module( {
    imports    : [
        PassportModule,
        
        JwtModule.registerAsync( jwtModuleAsyncOptions ),
        
        RepositoryModule.forFeature( [ UserCommandRepository, AuthRepository ], PROJECT )
    ],
    controllers: [
        AuthController
    ],
    providers  : [
        CommonConfigService,
        
        AuthService, FirebaseService,
        
        JwtService, HashingService,
        
        JwtAuthGlobalStrategy, LocalAuthStrategy, JwtAuthRefreshStrategy
    ]
} )
export class AuthModule {
}
