import { BaseEntity } from '@/libs/database/orm/typeorm/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { RelContractFunctionSignature } from './rel-contract-function_signature.entity';



@Entity( { name: 'contract_function_signature' } )
export class ContractFunctionSignature extends BaseEntity {
  /*
   * Columns
   * */
  @Column( { length: 30, comment: '함수 이름' } )
  name: string;
  
  @Column( { length: 255, comment: '함수 설명' } )
  description: string;
  
  /*
   * Index Columns
   * */
  @Column( { length: 8, unique: true, comment: 'contract의 function 별 signature | ex) 74899a7p' } )
  signature: string;
  
  
  /*
   * Relations
   * */
  @OneToMany(
    () => RelContractFunctionSignature,
    rel_contract_function_signature => rel_contract_function_signature.function_signature, {
      cascade: true,
    } )
  rel_contract_function_signatures: RelContractFunctionSignature;
}