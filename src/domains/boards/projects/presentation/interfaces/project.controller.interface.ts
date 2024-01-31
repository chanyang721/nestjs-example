import { ProjectEntity } from "../../infrastructure/entities/project.entity";
import { CreateProjectDto } from "../dtos/create-project.dto";



export interface IProjectControllerAdapter {
    createProject( files: Express.MulterS3.File[], createProjectDto: CreateProjectDto ): Promise<ProjectEntity>;
}
