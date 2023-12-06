import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity }                from "../../../../libs/database/orm/typeorm/base/base.entity";
import { ContractToFunctionSignature } from "./contract-to-function-signature.entity";



@Entity( { name: 'function-signature' })
export class FunctionSignature extends BaseEntity {
    @Column( { length: 8, comment: 'contract의 function 별 signature: 74899a7p' } )
    signature: string;
    
    @Column( { length: 30, comment: '함수 이름' } )
    name: string;
    
    @Column({ comment: '수수료 위임 여부' })
    is_fee_delegation: boolean;
    
    @OneToMany(
      () => ContractToFunctionSignature,
      contractToFunctionSignature => contractToFunctionSignature.function_signature, {
          cascade: true
      } )
    contract_to_function_signatures: ContractToFunctionSignature;
}