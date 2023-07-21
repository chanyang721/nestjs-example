import { Controller }         from "@nestjs/common";
import { IProjectController } from "../interfaces/project.controller.interface";
import { ProjectService }     from "../../application/services/project.service";



@Controller("project")
export class ProjectController implements IProjectController {
  constructor(
    private readonly projectService: ProjectService
  ) {
  }

}
