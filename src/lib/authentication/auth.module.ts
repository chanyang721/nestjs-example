import { Module }                from "@nestjs/common";
import { TypeOrmModule }         from "@nestjs/typeorm";
import { PassportModule }        from "@nestjs/passport";
import { MAIN }                  from "../utils/constant";
// import { JwtModule }             from "../utils/jwt/jwt.module";
// import { JwtService }            from "../utils/jwt/jwt.service";
// import { jwtModuleAsyncOptions } from "../utils/jwt/jwt.module.option";
// import { HashingModule }         from "../utils/hashing/hashing.module";
// import { HashingService }        from "../utils/hashing/hashing.service";
import { SharedConfigModule }  from "../configuration/shared.config.module";
import { SharedConfigService } from "../configuration/shared.config.service";
import { JwtAuthGlobalStrategy } from "../core-fundamental/guards/global/jwt.auth.global.strategy";
import { LocalAuthStrategy }     from "../core-fundamental/guards/local/local.auth.strategy";
import { AuthController }        from "./presentation/controller/auth.controller";
import { AuthService }           from "./application/service/auth.service";
import { AuthRepository }        from "./infrastructure/repository/auth.repository";
import { FirebaseService }       from "./infrastructure/authentication/firebase/firebase.service";
import { AuthEntity }            from "./infrastructure/entity/auth.entity";
import { UserEntity }            from "../../domain/user/infrastructure/entities/user.entity";
import { HashingModule }         from "../utils/hashing/hashing.module";
import { HashingService }        from "../utils/hashing/hashing.service";
import { JwtModule }             from "../utils/jwt/jwt.module";
import { jwtModuleAsyncOptions } from "../utils/jwt/jwt.module.option";
import { JwtService }            from "../utils/jwt/jwt.service";



@Module({
  imports    : [
    SharedConfigModule,

    PassportModule,

    JwtModule.registerAsync(jwtModuleAsyncOptions),

    HashingModule,

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

    LocalAuthStrategy, JwtAuthGlobalStrategy
  ]
})
export class AuthModule {
}
