import { Injectable, Logger }         from "@nestjs/common";
import { ApplicationFormsRepository } from "./application.forms.repository";
import { RegisterApplicationFormDto } from "./dtos/register.application.form.dto";
import { ApplicationForm }            from "./entities/application.form.entity";



@Injectable()
export class ApplicationFormsService {
    private readonly logger: Logger = new Logger( ApplicationFormsService.name );
    
    
    constructor(
      private readonly applicationFormRepository: ApplicationFormsRepository
    ) {
    }
    
    
    async getApplicationFormById( applicationFormId: string ): Promise<ApplicationForm> {
        const applicationForm = await this.applicationFormRepository.findApplicationFormById( applicationFormId );
        
        this.logger.debug( `[getApplicationFormById]: ${ applicationForm.id }` );
        return applicationForm;
    }
    
    
    async registerApplicationForm(
      registerApplicationFormDto: RegisterApplicationFormDto,
      files: Express.Multer.File[]
    ): Promise<any> {
        const newApplicationForm: ApplicationForm = await this.applicationFormRepository.registerApplicationForm();
        
        this.logger.debug( "" );
        return newApplicationForm;
    }
}
