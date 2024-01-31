import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { ProjectCommandRepository } from "../../../infrastructure/repositories/project.command.repository";
import { CreateProjectDto } from "../../../presentation/dtos/create-project.dto";



export class CreateProjectCommandImplement {
    constructor(
      private readonly createProjectDto: CreateProjectDto
    ) {
    }
    
}


@CommandHandler( CreateProjectCommandImplement )
export class CreateProjectCommandHandler implements ICommandHandler<CreateProjectCommandImplement> {
    constructor(
      private readonly projectRepository: ProjectCommandRepository,
      private readonly eventPublisher: EventPublisher
    ) {
    }
    
    
    public execute( command: CreateProjectCommandImplement ): any {
        // return this.eventPublisher.mergeObjectContext(
        // await this.projectRepository.createProject(command)
        // );
    }
}
