import { Module }                      from "@nestjs/common";
import { CqrsModule }                  from "@nestjs/cqrs";
import { MongooseModule }              from "@nestjs/mongoose";
import { TypeOrmModule }               from "@nestjs/typeorm";
import { ProjectCommandHandlers }      from "./application/commands/handlers";
import { ProjectEventHandlers }        from "./application/events/handlers";
import { ProjectQueryHandlers }        from "./application/queries/handlers";
import { ProjectService }              from "./application/services/project.service";
import { ProjectEntity }               from "./infrastructure/entities/project.entity";
import { ProjectCommandRepository }    from "./infrastructure/repositories/project.command.repository";
import { ProjectQueryRepository }      from "./infrastructure/repositories/project.query.repository";
import { ProjectModel, ProjectSchema } from "./infrastructure/schemas/project.schema";
import { ProjectController }           from "./presentation/controllers/project.controller";



@Module( {
    imports    : [
        CqrsModule,
        
        TypeOrmModule.forFeature( [ ProjectEntity ] ),
        
        MongooseModule.forFeature( [ { name: ProjectModel.name, schema: ProjectSchema } ] )
    ],
    controllers: [ ProjectController ],
    providers  : [
        ProjectService,
        ...ProjectCommandHandlers,
        ...ProjectQueryHandlers,
        ...ProjectEventHandlers,
        ProjectCommandRepository,
        ProjectQueryRepository
    ]
} )
export class ProjectModule {
}
