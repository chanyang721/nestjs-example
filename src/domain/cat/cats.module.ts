import { Module }                from "@nestjs/common";
import { TypeOrmModule }         from "@nestjs/typeorm";
import { CqrsModule }            from "@nestjs/cqrs";
import { MongooseModule } from "@nestjs/mongoose";
import { HttpModule }     from "../../lib/http/http.module";
import { CatController }  from "./presentation/controller/cat.controller";
import { CatCommandService }     from "./application/service/cat.command.service";
import { CatQueryService }       from "./application/service/cat.query.service";
import { CatsCommandRepository } from "./intrastructure/repository/command/cats.command.repository";
import { CatsQueryRepository }   from "./intrastructure/repository/query/cats.query.repository";
import { CatEntity }             from "./intrastructure/entitiy/cat.command.entity";
import { CatModel, CatSchema }   from "./intrastructure/entitiy/cat.query.schema";



@Module({
  imports    : [
    CqrsModule,
    HttpModule,
    // MongooseModule.forFeature([
    //   {
    //     name  : CatModel.name,
    //     schema: CatSchema
    //   }
    // ], "one"),
    // TypeOrmModule.forFeature([ CatEntity ], "main")
  ],
  controllers: [
    // CatController
  ],
  providers  : [
    // CatCommandService, CatsCommandRepository,
    //
    // CatQueryService, CatsQueryRepository
  ]
})
export class CatsModule {
}
