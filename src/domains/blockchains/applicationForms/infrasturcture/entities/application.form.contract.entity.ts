import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';
import { Contract } from '@/blockchains/contracts/entities';
import { CONTRACT_TYPE } from '../../../contracts/entities/enums';
import { ApplicationFormContractAudit } from './application.form.contract.audits.entity';
import { ApplicationFormContractFunctionSignature } from './application.form.contract.function.signature.entity';
import { ApplicationForm } from './application.form.entity';



@Entity( { name: 'application_form_contract' } )
export class ApplicationFormContract extends BaseEntity {
  /*
   * Contract Entity Columns
   * */
  @Column( { length: 20, comment: '이름' } )
  name: string;
  
  @Column( { length: 500, comment: '깃허브 등 소스코드의 주소' } )
  source_code_url: string;
  
  @Column( { length: 66, comment: '컨트랙트 배포 주소' } )
  deploy_tx_hash: string;
  
  @Column( { length: 255, comment: 'audit pdf 저장 url' } )
  audit_url: string;
  
  @Column( { default: true, comment: '활성화 상태' } )
  is_active: boolean;
  
  @Column( { length: 66, comment: '컨트랙트 주소' } )
  address: string;
  
  @Column( {
    type   : 'enum',
    enum   : CONTRACT_TYPE,
    default: CONTRACT_TYPE.ADDRESS_CONTRACT,
  } )
  @Index()
  type: CONTRACT_TYPE;
  
  /*
   * Contract Entity FK Columns
   * */
  @Column( { type: 'uuid', comment: 'token contract tracker fk' } )
  tracker: string;
  
  @Column()
  dapp_id: string;
  
  
  /*
   * Application FK Columns
   * */
  @Column( { type: 'uuid' } )
  application_id: string;
  
  @Column( { nullable: true, comment: '승인 후 생성된 contract와 연결' } )
  contract_id?: string;
  
  /*
   * Application Relations
   * */
  @OneToOne( () => Contract, {
    nullable: true,
  } )
  @JoinColumn( { name: 'contract_id' } )
  contract?: Contract;
  
  @ManyToOne(
    () => ApplicationForm,
    ( application_form ) => application_form.application_form_contracts,
  )
  @JoinColumn( { name: 'application_form_id' } )
  application_form: ApplicationForm;
  
  @OneToMany(
    () => ApplicationFormContractAudit,
    ( applicationFormContractAudit ) =>
      applicationFormContractAudit.application_form_contract,
    {
      cascade : true,
      nullable: true,
    },
  )
  audits: ApplicationFormContractAudit[];
  
  @OneToMany( () => ApplicationFormContractFunctionSignature, applicationFormContractFunctionSignature => applicationFormContractFunctionSignature.contract )
  function_signatures: ApplicationFormContractFunctionSignature[];
}