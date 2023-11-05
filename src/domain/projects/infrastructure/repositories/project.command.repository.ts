import { InjectDataSource }              from "@nestjs/typeorm";
import { DataSource, Repository }        from "typeorm";
import { PROJECT }                       from "../../../../libs/utils/constants";
import { RepositoryInject }              from "../../../../libs/utils/decoretors";
import { CreateProjectCommandImplement } from "../../application/commands/handlers/create-project.command.handler";
import { ProjectEntity }                 from "../entities/project.entity";
import { IProjectRepositoryAdapter }     from "../interfaces/project.repository.interface";



@RepositoryInject( ProjectCommandRepository )
export class ProjectCommandRepository extends Repository<ProjectEntity>
  implements IProjectRepositoryAdapter {
    constructor(
      @InjectDataSource( PROJECT )
      private readonly mainDataSource: DataSource
    ) {
        super( ProjectEntity, mainDataSource.createEntityManager() );
    }
    
    
    public async createProject( createProjectDto: CreateProjectCommandImplement ) {
        // return await this.save(createProjectDto)
    }
}
