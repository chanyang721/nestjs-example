import { Module }                from "@nestjs/common";
import { CqrsModule }            from "@nestjs/cqrs";
import { RepositoryModule }      from "../../lib/database/repository.module";
import { MAIN }                  from "../../lib/utils/constants";
import { UserController }        from "./presentation/controllers/user.controller";
import { UserService }           from "./application/services/user.service";
import { CommandHandlers }       from "./application/commands/handlers";
import { EventHandlers }         from "./application/events/handlers";
import { UserSagas }             from "./application/events/sagas/user.event.sagas";
import { UserCommandRepository } from "./infrastructure/repositories/user.command.repository";
import { QueryHandlers }         from "./application/queries/handlers";
import { MongooseModule }        from "@nestjs/mongoose";
import { UserModel, UserSchema } from "./infrastructure/schemas/user.schema";
import { UserQueryRepository }   from "./infrastructure/repositories/user.query.repository";



@Module({
  imports    : [
    CqrsModule,
    RepositoryModule.forFeature([ UserCommandRepository ], MAIN),
    RepositoryModule.forFeature([ UserQueryRepository ], MAIN),
    // MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ], MAIN)
  ],
  controllers: [ UserController ],
  providers  : [
    UserService,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    UserSagas,
  ]
})
export class UserModule {
}
