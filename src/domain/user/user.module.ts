import { Module }                from "@nestjs/common";
import { MongooseModule }        from "@nestjs/mongoose";
import { CqrsModule }            from "@nestjs/cqrs";
import { RepositoryModule }      from "../../libs/database/repository.module";
import { MAIN }                  from "../../libs/utils/constants";
import { UserController }        from "./presentation/controllers/user.controller";
import { UserService }           from "./application/services/user.service";
import { UserCommandHandlers }   from "./application/commands/handlers";
import { UserEventHandlers }     from "./application/events/handlers";
import { UserQueryHandlers }     from "./application/queries/handlers";
import { UserSagas }             from "./application/events/sagas/user.event.sagas";
import { UserModel, UserSchema } from "./infrastructure/schemas/user.schema";
import { UserCommandRepository } from "./infrastructure/repositories/user.command.repository";
import { UserQueryRepository }   from "./infrastructure/repositories/user.query.repository";



@Module({
    imports    : [
        CqrsModule,

        RepositoryModule.forFeature([ UserCommandRepository ], MAIN),

        RepositoryModule.forFeature([ UserQueryRepository ], MAIN),

        MongooseModule.forFeature([
            {
                name  : UserModel.name,
                schema: UserSchema,
            },
        ], MAIN),
    ],
    controllers: [ UserController ],
    providers  : [
        UserService, ...UserCommandHandlers, ...UserQueryHandlers, ...UserEventHandlers, UserSagas,
    ],
})
export class UserModule {
}
