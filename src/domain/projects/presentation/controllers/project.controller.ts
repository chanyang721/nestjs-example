import { Body, Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags }                                 from '@nestjs/swagger';
import { AnyFilesInterceptor }                                    from '@nestjs/platform-express';
import { multerOptions }                                          from '../../../../libs/utils/multer/options';
import { ProjectService }                                         from '../../application/services/project.service';
import { IProjectController }                                     from '../interfaces/project.controller.interface';
import { CreateProjectDto }                                       from '../dtos/create-project.dto';



@ApiBearerAuth()
@ApiTags( 'projects' )
@Controller( 'projects' )
export class ProjectController implements IProjectController {
    constructor( private readonly projectService: ProjectService ) {
    }
    
    
    @Post( '' )
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    public async createProject(
        @UploadedFiles() files: Express.MulterS3.File[],
        @Body() createProjectDto: CreateProjectDto,
    ): Promise<any> {
        return await this.projectService.createProject( { files, createProjectDto } );
    }
    
}
