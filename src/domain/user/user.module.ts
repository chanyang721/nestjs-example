import { Module }         from '@nestjs/common';
import { TypeOrmModule }  from "@nestjs/typeorm";
import { MongooseModule } from "@nestjs/mongoose";
import { CqrsModule }     from "@nestjs/cqrs";
import { HttpModule }     from "../../lib/http/http.module";
import { UserController } from './presentation/controller/user.controller';
import { UserService }    from './application/service/user.service';
import { UserEntity }     from "./infrastructure/entities/user.entity";
import { UserRepository } from "./infrastructure/repository/user.repository";


@Module({
  imports: [
    CqrsModule,
    HttpModule,
    // MongooseModule.forFeature([
    //   {
    //     name  : CatModel.name,
    //     schema: CatSchema
    //   }
    // ], "one"),
    TypeOrmModule.forFeature([ UserEntity ], "main")
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule {}
