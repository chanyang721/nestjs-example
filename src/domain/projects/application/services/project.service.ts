import { Injectable }                    from "@nestjs/common";
import { CommandBus, QueryBus }          from "@nestjs/cqrs";
import { CreateProjectCommandImplement } from "../commands/handlers/create-project.command.handler";



@Injectable()
export class ProjectService {
    constructor(
      private readonly commandBus: CommandBus,
      private readonly queryBus: QueryBus
    ) {
    }
    
    
    public async createProject( createProjectWithFilesDto: any ): Promise<any> {
        return await this.commandBus.execute( new CreateProjectCommandImplement( createProjectWithFilesDto ) );
    }
}
