import { Module }           from "@nestjs/common";
import { CqrsModule }       from "@nestjs/cqrs";
import { RepositoryModule } from "../../lib/database/repository.module";
import { MAIN }             from "../../lib/utils/constants";
import { UserController }   from "./presentation/controllers/user.controller";
import { UserService }      from "./application/services/user.service";
import { CommandHandlers }  from "./application/commands/handlers";
import { EventHandlers }    from "./application/events/handlers";
import { HeroesGameSagas }  from "./application/events/sagas/test.event.sagas";
import { UserRepository }   from "./infrastructure/repositories/user.repository";
import { QueryHandlers }    from "./application/queries/handlers";



@Module({
  imports    : [
    CqrsModule,
    RepositoryModule.forFeature([ UserRepository ], MAIN)
    /**
     * Query MongoDB Module
     */
  ],
  controllers: [ UserController ],
  providers  : [
    UserService,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    HeroesGameSagas,
  ]
})
export class UserModule {
}
