import {
  ApplicationForm,
  ApplicationFormContract,
  ApplicationFormDapp,
  ApplicationFormProcessLog,
} from '@/blockchains/applicationForms/infrasturcture/entities';
import { APPLICATION_PROCESS_STATUS } from '@/blockchains/applicationForms/infrasturcture/entities/enums';
import { Account } from '@/blockchains/wallets/entities/account.entity';
import { BaseModel } from '@/libs/database/orm/mongoose/base/mongoose/base.model';
import { Timestamps } from '@/libs/database/orm/mongoose/base/mongoose/timestamps.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { Prop, Schema } from '@nestjs/mongoose';
import { Column } from 'typeorm';



export type IRootApplicationForm = Omit<ApplicationForm,
  | 'created_at'
  | 'updated_at'
  | 'application_dapp_form_id'
  | 'account_id'
>


@Schema( { collection: 'ROOT_APPLICATION_FORM' } )
export class RootApplicationForm extends AggregateRoot
  implements IRootApplicationForm, BaseModel {
  
  constructor() {
    super();
    this.autoCommit = true;
  }
  
  
  @Prop()
  id: string;
  
  /*
   * Columns
   * */
  @Prop()
  process_status: APPLICATION_PROCESS_STATUS;
  
  @Prop()
  application_form_number: number;
  
  @Prop()
  terms_agreement: boolean;
  
  @Prop()
  email_sent_at: Date;
  
  /*
   * Mysql Relations
   * */
  @Prop()
  applicationFormDapp: ApplicationFormDapp;
  
  @Prop()
  process_logs: ApplicationFormProcessLog[];
  
  @Prop()
  application_form_contracts: ApplicationFormContract[];
  
  @Prop()
  account: Account;
  
  @Prop()
  timestamps: Timestamps;
  
  
  async getRootApplicationForm( applicationFormId: string ): Promise<RootApplicationForm> {
    
    
    return;
  }
}