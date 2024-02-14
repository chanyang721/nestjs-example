import { PickType } from '@nestjs/mapped-types';
import { ApplicationFormContract } from '@/blockchains/applicationForms/infrasturcture/entities/application.form.contract.entity';



export class ApplicationFormContractDto extends PickType( ApplicationFormContract, [
  'name',
  'source_code_url',
  'deploy_tx_hash',
  'audit_url',
  'is_active',
  'address',
  'type',
  'tracker',
  'dapp_id',
] ) {
  
  application_form_id: string;
  
  dapp_id: string;
  
  
  constructor( inputData: ApplicationFormContract ) {
    super();
  }
}