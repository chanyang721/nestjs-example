import { Module }                from "@nestjs/common";
import { JwtModule }             from "@nestjs/jwt";
import { ConfigService }         from "@nestjs/config";
import { PassportModule }        from "@nestjs/passport";
import { TypeOrmModule }         from "@nestjs/typeorm";
import { CqrsModule }            from "@nestjs/cqrs";
import { MongooseModule }        from "@nestjs/mongoose";
import { Algorithm }             from "jsonwebtoken";
import { JwtAuthGlobalStrategy } from "../../lib/core-fundamental/guards/jwt.auth.global.strategy";
import { HttpModule }            from "../../lib/shared/http/http.module";
import { CatController }         from "./presentation/adapter/controllers/cat.controller";
import { CatsCommandService }    from "./application/service/cats.command.service";
import { CatsQueryService }      from "./application/service/cats.query.service";
import { CatsCommandRepository } from "./intrastructure/repository/command/cats.command.repository";
import { CatsQueryRepository }   from "./intrastructure/repository/query/cats.query.repository";
import { CatCommandEntity }      from "./intrastructure/entitiy/cat.command.entity";
import { CatModel, CatSchema }   from "./intrastructure/entitiy/cat.query.schema";



@Module({
  imports    : [
    CqrsModule,
    PassportModule,
    HttpModule,
    TypeOrmModule.forFeature([ CatCommandEntity ]),
    MongooseModule.forFeature([ { name  : CatModel.name, schema: CatSchema } ], "cats"),
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
    CatController
  ],
  providers  : [
    CatsCommandService,
    CatsCommandRepository,

    CatsQueryService,
    CatsQueryRepository,

    JwtAuthGlobalStrategy
  ]
})
export class CatsModule {
}
