import { Module }                from '@nestjs/common';
import { ConfigService }         from "@nestjs/config";
import { TypeOrmModule }         from "@nestjs/typeorm";
import { PassportModule }        from "@nestjs/passport";
import { JwtModule }             from "@nestjs/jwt";
import { Algorithm }             from "jsonwebtoken";
import { JwtAuthGlobalStrategy } from "../core-fundamental/guards/global/jwt.auth.global.strategy";
import { HttpModule }            from "../http/http.module";
import { AuthController }        from './presentation/controller/auth.controller';
import { AuthService }           from './application/service/auth.service';
import { UserEntity }            from "../../domain/user/infrastructure/entities/user.entity";

@Module({
  imports: [
    HttpModule,
    PassportModule,
    // TypeOrmModule.forFeature([ UserEntity ], "main"),
    JwtModule.registerAsync({
      inject    : [ ConfigService ],
      useFactory: ( configService: ConfigService ) => ( {
        global       : true,
        secret       : configService.get<string>("JWT_SECRET"),
        signOptions  : {
          algorithm: configService.get<Algorithm>("JWT_ALGORITHM"),
          expiresIn: configService.get<string>("JWT_EXPIRATION_TIME"),
          subject  : configService.get<string>("JWT_SIGN_SUBJECT")
        },
        verifyOptions: {
          algorithms: [ configService.get<Algorithm>("JWT_ALGORITHM") ]
        }
      } )
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtAuthGlobalStrategy
  ]
})
export class AuthModule {}
