import { Module }                      from "@nestjs/common";
import { CqrsModule }                  from "@nestjs/cqrs";
import { MongooseModule }              from "@nestjs/mongoose";
import { RepositoryModule }            from "../../libs/database/orm/typeorm/repository.module";
import { MAIN, PROJECT }               from "../../libs/utils/constants";
import { ProjectCommandHandlers }      from "./application/commands/handlers";
import { ProjectEventHandlers }        from "./application/events/handlers";
import { ProjectQueryHandlers }        from "./application/queries/handlers";
import { ProjectService }              from "./application/services/project.service";
import { ProjectCommandRepository }    from "./infrastructure/repositories/project.command.repository";
import { ProjectQueryRepository }      from "./infrastructure/repositories/project.query.repository";
import { ProjectModel, ProjectSchema } from "./infrastructure/schemas/project.schema";
import { ProjectController }           from "./presentation/controllers/project.controller";



@Module( {
    imports    : [
        CqrsModule,
        
        RepositoryModule.forFeature( [ ProjectCommandRepository ], PROJECT ),
        
        RepositoryModule.forFeature( [ ProjectQueryRepository ], PROJECT ),
        
        MongooseModule.forFeature( [ { name: ProjectModel.name, schema: ProjectSchema } ], MAIN )
    ],
    controllers: [ ProjectController ],
    providers  : [
        ProjectService,
        ...ProjectCommandHandlers,
        ...ProjectQueryHandlers,
        ...ProjectEventHandlers
    ]
} )
export class ProjectModule {
}
