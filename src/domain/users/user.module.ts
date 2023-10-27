import { Module }                from "@nestjs/common";
import { CqrsModule }            from "@nestjs/cqrs";
import { RepositoryModule }      from "../../libs/database/orm/typeorm/repository.module";
import { PROJECT }               from "../../libs/utils/constants";
import { UserCommandHandlers }   from "./application/commands/handlers";
import { UserEventHandlers }     from "./application/events/handlers";
import { UserSagas }             from "./application/events/sagas/user.event.sagas";
import { UserQueryHandlers }     from "./application/queries/handlers";
import { UserService }           from "./application/services/user.service";
import { UserCommandRepository } from "./infrastructure/repositories/user.command.repository";
import { UserQueryRepository }   from "./infrastructure/repositories/user.query.repository";
import { UserController }        from "./presentation/controllers/user.controller";



@Module( {
  imports    : [
    CqrsModule,
    
    RepositoryModule.forFeature( [ UserCommandRepository ], PROJECT ),
    
    RepositoryModule.forFeature( [ UserQueryRepository ], PROJECT )
    
    // MongooseModule.forFeature([
    //     {
    //         name  : UserModel.name,
    //         schema: UserSchema,
    //     },
    // ], MAIN),
  ],
  controllers: [ UserController ],
  providers  : [
    UserService,
    ...UserCommandHandlers,
    ...UserQueryHandlers,
    ...UserEventHandlers,
    UserSagas
  ]
} )
export class UserModule {
}
