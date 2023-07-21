import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateProjectCommand }                            from "../implements/create-project.command";
import { ProjectCommandRepository }                        from "../../../infrastructure/repositories/project.command.repository";



@CommandHandler(CreateProjectCommand)
export class CreateProjectCommandHandler implements ICommandHandler<CreateProjectCommand> {
  constructor(
    private readonly projectRepository: ProjectCommandRepository,
    private readonly eventPublisher: EventPublisher
  ) {
  }


  public execute( command: CreateProjectCommand ): any {
    // return this.eventPublisher.mergeObjectContext(
      // await this.projectRepository.createProject(command)
    // );
  }
}
