import { CreateProjectDto } from "../../../presentation/dtos/create-project.dto";



export class CreateProjectCommand {
    constructor(
      private readonly createProjectDto: CreateProjectDto
    ) {
    }
    
}
