import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CommonConfigService } from "../../../libs/config/common.config.service";
import { AzureStorageService } from "../../../libs/infra/azure/storage/azure.storage.service";
import { ApplicationFormsRepository } from "./application.forms.repository";
import { ApplicationFormDappDto } from "./dtos/application.form.dapp.dto";
import { RegisterApplicationFormDto } from "./dtos/register.application.form.dto";
import { TermAgreementDto } from "./dtos/terms.agreement.dto";
import { ApplicationForm } from "./entities/application.form.entity";
import { ApplicationFormTermsAgreement } from "./entities/application.form.terms.agreement.entity";



@Injectable()
export class ApplicationFormsService {
    private readonly logger: Logger = new Logger( ApplicationFormsService.name );
    private readonly containerName: string;
    
    
    constructor(
      private readonly commonConfigService: CommonConfigService,
      private readonly applicationFormRepository: ApplicationFormsRepository,
      private readonly storageService: AzureStorageService
    ) {
        const storageConfig = this.commonConfigService.accessAzureConfig;
        this.containerName = storageConfig.storage.containerName;
    }
    
    
    async getApplicationFormById( applicationFormId: string ): Promise<ApplicationForm> {
        const applicationForm = await this.applicationFormRepository.findApplicationFormById( applicationFormId );
        
        this.logger.debug( `[getApplicationFormById]: ${ applicationForm.id }` );
        return applicationForm;
    }
    
    
    async registerApplicationForm(
      files: Express.Multer.File[],
      registerApplicationFormDto: RegisterApplicationFormDto
    ): Promise<any> {
        const newApplicationForm: ApplicationForm = await this.applicationFormRepository.registerApplicationForm();
        
        this.logger.debug( "newApplicationForm: ", newApplicationForm );
        return newApplicationForm;
    }
    
    
    public async getTeemAgreements( version: number ): Promise<TermAgreementDto[]> {
        const terms: ApplicationFormTermsAgreement[] =
          await this.applicationFormRepository.findTermsAgreements( version );
        
        if ( !terms.length ) throw new NotFoundException( "약관을 찾을 수 없습니다." );
        return terms.map( ( term ) => new TermAgreementDto( term ) );
    }
    
    
    async registerApplicationFormDapp(
      file: Express.Multer.File,
      registerDappApplicationForm: ApplicationFormDappDto
    ): Promise<ApplicationFormDappDto> {
        try {
            /* upload file */
            const uploadIconFileUrl = await this.storageService.uploadFile(
              this.containerName,
              registerDappApplicationForm.application_form_id,
              file.originalname,
              file.buffer
            );
            
            /* save dapp application form */
            const newApplicationFormDapp: ApplicationFormDappDto =
              await this.applicationFormRepository.registerDappApplicationForm( {
                  ...registerDappApplicationForm,
                  logo: uploadIconFileUrl
              } );
            
            if ( !newApplicationFormDapp ) throw new BadRequestException( "신청서를 생성할 수 없습니다" );
            return new ApplicationFormDappDto( newApplicationFormDapp );
        }
        catch ( error ) {
            this.logger.debug( error );
            /* delete file if failed */
            await this.storageService.deleteFile(
              this.containerName,
              registerDappApplicationForm.application_form_id
            );
        }
    }
}
