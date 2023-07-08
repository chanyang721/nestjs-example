import { Module }         from '@nestjs/common';
import { UserService }    from './application/service/user.service';
import { UserController } from './presentation/controller/user.controller';
import { CqrsModule } from "@nestjs/cqrs";
import { HttpModule } from "../../lib/http/http.module";


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
    // TypeOrmModule.forFeature([ CatEntity ], "main")
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
