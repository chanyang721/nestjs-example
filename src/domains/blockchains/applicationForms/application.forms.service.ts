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
        const newApplicationForm = await this.applicationFormRepository.findApplicationFormById( applicationFormId );
        
        this.logger.debug( `[getApplicationFormById]: ${ newApplicationForm.id }` );
        return newApplicationForm;
    }
    
    
    async registerApplicationForm( registerApplicationFormDto: RegisterApplicationFormDto ): Promise<any> {
    
    }
}
