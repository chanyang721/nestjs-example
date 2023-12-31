import { Module }                 from "@nestjs/common";
import { JwtModule }              from "@nestjs/jwt";
import { PassportModule }         from "@nestjs/passport";
import { TypeOrmModule }          from "@nestjs/typeorm";
import { UserEntity }             from "../../domains/users/infrastructure/entities/user.entity";
import { UserRepository }         from "../../domains/users/infrastructure/repositories/user.repository";
import { CommonConfigService }    from "../config/common.config.service";
import { JwtAuthGlobalStrategy }  from "../fundamentals/guards/global/jwt.auth.global.strategy";
import { JwtAuthRefreshStrategy } from "../fundamentals/guards/local/jwt.refresh.strategy";
import { LocalAuthStrategy }      from "../fundamentals/guards/local/local.auth.strategy";
import { HashingService }         from "../helpers/hashing/hashing.service";
import { jwtModuleAsyncOptions }  from "../helpers/jwt/jwt.module.option";
import { JwtService }             from "../helpers/jwt/jwt.service";
import { AuthService }            from "./application/services/auth.service";
import { FirebaseService }        from "./infrastructure/platforms/firebase/firebase.service";
import { AuthRepository }         from "./infrastructure/repositories/auth.repository";
import { AuthController }         from "./presentation/controllers/auth.controller";



@Module( {
    imports    : [
        PassportModule,
        
        JwtModule.registerAsync( jwtModuleAsyncOptions ),
        
        TypeOrmModule.forFeature( [ UserEntity ] )
    ],
    controllers: [
        AuthController
    ],
    providers  : [
        CommonConfigService,
        
        AuthService, FirebaseService,
        
        JwtService, HashingService,
        
        JwtAuthGlobalStrategy, LocalAuthStrategy, JwtAuthRefreshStrategy,
        
        UserRepository, AuthRepository
    ]
} )
export class AuthModule {
}
