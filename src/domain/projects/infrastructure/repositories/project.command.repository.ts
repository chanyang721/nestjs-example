import { InjectDataSource }       from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { PROJECT }                from "../../../../libs/utils/constants";
import { RepositoryInject }       from "../../../../libs/utils/decoretors";
import { CreateProjectCommand }   from "../../application/commands/implements/create-project.command";
import { ProjectEntity }          from "../entities/project.entity";



@RepositoryInject( ProjectCommandRepository )
export class ProjectCommandRepository extends Repository<ProjectEntity> {
    constructor(
      @InjectDataSource( PROJECT )
      private readonly mainDataSource: DataSource
    ) {
        super( ProjectEntity, mainDataSource.createEntityManager() );
    }
    
    
    public async createProject( createProjectDto: CreateProjectCommand ) {
        // return await this.save(createProjectDto)
    }
}
