import { ApplicationFormCommandHandlers } from '@/blockchains/applicationForms/application/commands/handlers';
import {
  ApplicationFormDapp,
} from '@/blockchains/applicationForms/infrasturcture/entities/application.form.dapp.entity';
import { ApplicationForm } from '@/blockchains/applicationForms/infrasturcture/entities/application.form.entity';
import { CommonConfigService } from '@/libs/config/common.config.service';
import { AzureCommunicationService } from '@/libs/infra/azure/mail/azure.communication.service';
import { AzureStorageService } from '@/libs/infra/azure/storage/azure.storage.service';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ApplicationFormContract,
  ApplicationFormContractAudit,
  ApplicationFormContractFunctionSignature,
  ApplicationFormProcessLog,
  ApplicationFormTermsAgreement,
} from 'src/domains/blockchains/applicationForms/infrasturcture/entities';
import { Account } from '../wallets/entities/account.entity';
import { ApplicationFormsService } from './application/services/application.forms.service';
import { ApplicationFormsRepository } from './infrasturcture/application.forms.repository';
import { ApplicationFormsController } from './presentation/controllers/application.forms.controller';



@Module( {
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature( [
      Account,
      ApplicationForm,
      ApplicationFormDapp,
      ApplicationFormContract,
      ApplicationFormContractAudit,
      ApplicationFormContractFunctionSignature,
      ApplicationFormProcessLog,
      ApplicationFormTermsAgreement,
    ] )
  ],
  controllers: [
    ApplicationFormsController,
  ],
  providers: [
    CommonConfigService,
    ApplicationFormsService,
    ApplicationFormsRepository,
    
    ...ApplicationFormCommandHandlers,
    
    AzureStorageService,
    AzureCommunicationService,
  ],
} )
export class ApplicationFormsModule {
}
