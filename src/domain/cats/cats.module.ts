import { Module }         from '@nestjs/common';
import { CatsService }    from './services/cats.service';
import { CatsController } from './controllers/cats.controller';
import { PassportModule } from "@nestjs/passport";
import { JwtModule }             from "@nestjs/jwt";
import { ConfigService }         from "@nestjs/config";
import { Algorithm }             from "jsonwebtoken";
import { JwtAuthGlobalStrategy } from "../../fundamentals/guards/jwt.auth.global.strategy";

@Module({
  imports: [
    PassportModule, JwtModule.registerAsync({
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
  controllers: [CatsController],
  providers: [CatsService, JwtAuthGlobalStrategy]
})
export class CatsModule {}
