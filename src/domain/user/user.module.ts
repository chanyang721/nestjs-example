import { Module }           from "@nestjs/common";
import { RepositoryModule } from "../../lib/database/repository.module";
import { MAIN }             from "../../lib/utils/constants";
import { UserController }   from "./presentation/controllers/user.controller";
import { UserService }      from "./application/services/user.service";
import { UserRepository }   from "./infrastructure/repositories/user.repository";



@Module({
  imports    : [
    RepositoryModule.forFeature([ UserRepository ], MAIN),
    /**
     * Query MongoDB Module
     */
  ],
  controllers: [ UserController ],
  providers  : [ UserService ]
})
export class UserModule {
}
