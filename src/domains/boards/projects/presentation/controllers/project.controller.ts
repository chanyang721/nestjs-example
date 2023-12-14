import { Body, Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { AnyFilesInterceptor }                                    from "@nestjs/platform-express";
import { ApiBearerAuth, ApiTags }                                 from "@nestjs/swagger";
import { multerOptions }                                          from "../../../../../libs/helpers/multer/options";
import { ProjectService }                                         from "../../application/services/project.service";
import { CreateProjectDto }                                       from "../dtos/create-project.dto";
import { IProjectControllerAdapter }                              from "../interfaces/project.controller.interface";



@ApiBearerAuth()
@ApiTags( "projects" )
@Controller( "projects" )
export class ProjectController
  implements IProjectControllerAdapter {
    constructor( private readonly projectService: ProjectService ) {
    }
    
    
    @Post( "" )
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    public async createProject(
      @UploadedFiles() files: Express.MulterS3.File[],
      @Body() createProjectDto: CreateProjectDto
    ): Promise<any> {
        return await this.projectService.createProject( { files, createProjectDto } );
    }
    
}
