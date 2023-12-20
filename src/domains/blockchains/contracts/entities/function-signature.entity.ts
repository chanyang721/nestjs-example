import { Column, Entity, Index, OneToMany } from "typeorm";
import { BaseEntity }                       from "../../../../libs/database/orm/typeorm/base/base.entity";
import { RelContractFunctionSignature }     from "./rel-contract-function_signature.entity";



@Entity( { name: "function_signature" } )
export class FunctionSignature extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 30, comment: "함수 이름" } )
    name: string;
    
    @Column( { comment: "수수료 위임 여부" } )
    is_fee_delegation: boolean;
    
    
    /*
     * Index Columns
     * */
    @Column( { length: 8, unique: true, comment: "contract 의 function 별 signature: 74899a7p" } )
    signature: string;
    
    
    /*
     * Relations
     * */
    @OneToMany(
      () => RelContractFunctionSignature,
      rel_contract_function_signature => rel_contract_function_signature.function_signature, {
          cascade: true
      } )
    rel_contract_function_signatures: RelContractFunctionSignature;
}