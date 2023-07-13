import { Module }           from "@nestjs/common";
import { RepositoryModule } from "../../lib/database/repository.module";
import { UserController }   from "./presentation/controllers/user.controller";
import { UserService }      from "./application/services/user.service";
import { UserRepository }   from "./infrastructure/repositories/user.repository";
import { TypeOrmModule }    from "@nestjs/typeorm";
import { UserEntity }       from "./infrastructure/entities/user.entity";
import { MAIN }             from "../../lib/utils/constants";



@Module({
  imports    : [
    RepositoryModule.forFeature([ UserRepository ]),

    TypeOrmModule.forFeature([ UserEntity ], MAIN)
  ],
  controllers: [ UserController ],
  providers  : [ UserService ]
})
export class UserModule {
}
