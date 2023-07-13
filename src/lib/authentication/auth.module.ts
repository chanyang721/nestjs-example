import { Module }                 from "@nestjs/common";
import { TypeOrmModule }          from "@nestjs/typeorm";
import { PassportModule }         from "@nestjs/passport";
import { JwtModule }              from "@nestjs/jwt";
import { MAIN }                   from "../utils/constant";
import { JwtService }             from "../utils/jwt/jwt.service";
import { jwtModuleAsyncOptions }  from "../utils/jwt/jwt.module.option";
import { HashingService }         from "../utils/hashing/hashing.service";
import { SharedConfigService }    from "../configuration/shared.config.service";
import { JwtAuthGlobalStrategy }  from "../core-fundamental/guards/global/jwt.auth.global.strategy";
import { LocalAuthStrategy }      from "../core-fundamental/guards/local/local.auth.strategy";
import { JwtAuthRefreshStrategy } from "../core-fundamental/guards/local/jwt.refresh.strategy";
import { AuthController }         from "./presentation/controller/auth.controller";
import { AuthService }            from "./application/service/auth.service";
import { AuthRepository }         from "./infrastructure/repository/auth.repository";
import { FirebaseService }        from "./infrastructure/authentication/firebase/firebase.service";
import { AuthEntity }             from "./infrastructure/entity/auth.entity";
import { UserEntity }             from "../../domain/user/infrastructure/entities/user.entity";



@Module({
  imports    : [
    PassportModule,

    JwtModule.registerAsync(jwtModuleAsyncOptions),

    TypeOrmModule.forFeature([ UserEntity, AuthEntity ], MAIN)
  ],
  controllers: [
    AuthController
  ],
  providers  : [
    SharedConfigService,

    AuthService, AuthRepository,

    FirebaseService,

    JwtService,

    HashingService,

    JwtAuthGlobalStrategy, LocalAuthStrategy, JwtAuthRefreshStrategy
  ]
})
export class AuthModule {
}
