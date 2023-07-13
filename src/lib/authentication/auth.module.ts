import { Module }                 from "@nestjs/common";
import { PassportModule }         from "@nestjs/passport";
import { JwtModule }  from "@nestjs/jwt";
import { MAIN }       from "../utils/constants";
import { JwtService } from "../utils/jwt/jwt.service";
import { jwtModuleAsyncOptions }  from "../utils/jwt/jwt.module.option";
import { HashingService }         from "../utils/hashing/hashing.service";
import { SharedConfigService }    from "../configuration/shared.config.service";
import { JwtAuthGlobalStrategy }  from "../core-fundamentals/guards/global/jwt.auth.global.strategy";
import { LocalAuthStrategy }      from "../core-fundamentals/guards/local/local.auth.strategy";
import { JwtAuthRefreshStrategy } from "../core-fundamentals/guards/local/jwt.refresh.strategy";
import { AuthController } from "./presentation/controllers/auth.controller";
import { AuthService }    from "./application/services/auth.service";
import { AuthRepository } from "./infrastructure/repositories/auth.repository";
import { FirebaseService } from "./infrastructure/platforms/firebase/firebase.service";
import { RepositoryModule } from "../database/repository.module";
import { UserRepository }   from "../../domain/user/infrastructure/repositories/user.repository";
import { TypeOrmModule }    from "@nestjs/typeorm";
import { UserEntity } from "../../domain/user/infrastructure/entities/user.entity";
import { AuthEntity } from "./infrastructure/entities/auth.entity";



@Module({
  imports    : [
    PassportModule,

    JwtModule.registerAsync(jwtModuleAsyncOptions),

    TypeOrmModule.forFeature([ UserEntity, AuthEntity ], MAIN),

    RepositoryModule.forRoot([ UserRepository, AuthRepository ], MAIN)
  ],
  controllers: [
    AuthController
  ],
  providers  : [
    SharedConfigService,

    AuthService, AuthRepository, FirebaseService,

    JwtService, HashingService,

    JwtAuthGlobalStrategy, LocalAuthStrategy, JwtAuthRefreshStrategy
  ]
})
export class AuthModule {
}
