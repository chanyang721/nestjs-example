import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';
import { ApplicationFormContract } from './application.form.contract.entity';



@Entity( { name: 'application_form_contract_audit' } )
export class ApplicationFormContractAudit extends BaseEntity {
  
  @Column( { comment: '파일 original name' } )
  name: string;
  
  @Column( { comment: '파일 용량' } )
  size: number;
  
  @Column( { length: 255, comment: '클라우드 스토리지 url' } )
  audit_url: string;
  
  @Column( { comment: 'contract 신청서 id' } )
  application_form_contract_id: number;
  
  
  @ManyToOne(
    () => ApplicationFormContract,
    ( applicationContract ) => applicationContract.audits,
  )
  @JoinColumn( { name: 'application_form_contract_id' } )
  application_form_contract: ApplicationFormContract;
}
