import {
  ApplicationFormContract,
} from '@/blockchains/applicationForms/infrasturcture/entities/application.form.contract.entity';
import {
  ApplicationFormDapp,
} from '@/blockchains/applicationForms/infrasturcture/entities/application.form.dapp.entity';
import { ApplicationForm } from '@/blockchains/applicationForms/infrasturcture/entities/application.form.entity';
import {
  ApplicationFormTermsAgreement,
} from '@/blockchains/applicationForms/infrasturcture/entities/application.form.terms.agreement.entity';
import { ApplicationFormDappDto } from '@/blockchains/applicationForms/presentation/dtos';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';



@Injectable()
export class ApplicationFormsRepository extends Repository<ApplicationForm> {
  private readonly logger: Logger = new Logger( ApplicationFormsRepository.name );
  
  
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository( ApplicationFormDapp )
    private readonly applicationDappFormRepository: Repository<ApplicationFormDapp>,
    @InjectRepository( ApplicationFormContract )
    private readonly applicationContractFormRepository: Repository<ApplicationFormContract>,
  ) {
    super( ApplicationForm, dataSource.createEntityManager() );
  }
  
  
  async findApplicationFormById( applicationFormId: string ): Promise<ApplicationForm> {
    return await this.findOne( {
      where: { id: applicationFormId },
    } );
  }
  
  
  async registerApplicationForm(): Promise<ApplicationForm> {
    
    return;
  }
  
  
  async findTermsAgreements( version: number ): Promise<ApplicationFormTermsAgreement[]> {
    const terms: ApplicationFormTermsAgreement[] =
      await this.dataSource.getRepository( ApplicationFormTermsAgreement )
                .find( {
                  where: { is_active: true, version: version },
                } );
    
    return terms;
  }
  
  
  public async registerDappApplicationForm( registerDappApplicationForm: ApplicationFormDappDto ): Promise<ApplicationFormDapp> {
    const newDappApplicationForm: ApplicationFormDapp = await this.dataSource.getRepository( ApplicationFormDapp )
                                                                  .save( registerDappApplicationForm );
    
    return newDappApplicationForm;
  }
}