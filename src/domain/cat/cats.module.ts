import { Module }                from "@nestjs/common";
import { JwtModule }             from "@nestjs/jwt";
import { ConfigService }         from "@nestjs/config";
import { PassportModule }        from "@nestjs/passport";
import { TypeOrmModule }         from "@nestjs/typeorm";
import { Algorithm }             from "jsonwebtoken";
import { JwtAuthGlobalStrategy } from "../../lib/core-fundamental/guards/jwt.auth.global.strategy";
import { HttpModule }            from "../../lib/shared/http/http.module";
import { CatCommandController }  from "./adapter/controllers/command/cats.command.controller";
import { CatQueryController }    from "./adapter/controllers/query/cats.query.controller";
import { CatsCommandService }    from "./usecase/service/cats.command.service";
import { CatsQueryService }      from "./usecase/service/cats.query.service";
import { CatsCommandRepository } from "./repository/command/cats.command.repository";
import { CatCommandEntity }      from "./entitiy/cat.command.entity";
import { CqrsModule }            from "@nestjs/cqrs";
import { CatsQueryRepository }   from "./repository/query/cats.query.repository";
import { MongooseModule }      from "@nestjs/mongoose";
import { CatModel, CatSchema } from "./entitiy/cat.query.schema";



@Module({
  imports    : [
    CqrsModule,
    PassportModule,
    HttpModule,
    TypeOrmModule.forFeature([ CatCommandEntity ]),
    MongooseModule.forFeature([{ name: CatModel.name, schema: CatSchema }], 'cats'),
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
    CatCommandController,
    CatQueryController
  ],
  providers  : [
    CatsCommandService,
    CatsQueryService,
    CatsCommandRepository,
    CatsQueryRepository,
    JwtAuthGlobalStrategy
  ]
})
export class CatsModule {
}
