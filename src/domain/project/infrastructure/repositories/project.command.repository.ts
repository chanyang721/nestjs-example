import { DataSource, Repository } from "typeorm";
import { InjectDataSource }       from "@nestjs/typeorm";
import { RepositoryInject }       from "../../../../lib/utils/decoretors";
import { MAIN }                 from "../../../../lib/utils/constants";
import { CreateProjectCommand } from "../../application/commands/implements/create-project.command";
import { ProjectEntity }        from "../entities/project.entity";



@RepositoryInject(ProjectCommandRepository)
export class ProjectCommandRepository extends Repository<ProjectEntity> {
  constructor(
    @InjectDataSource(MAIN)
    private readonly mainDataSource: DataSource
  ) {
    super(ProjectEntity, mainDataSource.createEntityManager())
  }


  public async createProject( createProjectDto: CreateProjectCommand ) {
    // return await this.save(createProjectDto)
  }
}
