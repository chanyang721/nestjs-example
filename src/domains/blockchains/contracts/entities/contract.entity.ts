import { Column, Entity, OneToMany }   from "typeorm";
import { BaseEntity }                  from "../../../../libs/database/orm/typeorm/base/base.entity";
import { ContractToFunctionSignature } from "./contract-to-function-signature.entity";



@Entity( { name: "contract" } )
export class Contract extends BaseEntity {
    @Column( { length: 20, comment: '이름' } )
    name: string;
    
    @Column( { length: 66, comment: '주소' } )
    address: string;
    
    @Column( { default: true, comment: '활성화 상태' } )
    is_active: boolean;
    
    @Column( { length: 20, nullable: true, comment: '별칭' } )
    label: string;
    
    @OneToMany(
      () => ContractToFunctionSignature,
      ContractToFunctionSignature => ContractToFunctionSignature.contract, {
          cascade: true
      } )
    contract_to_function_signatures: ContractToFunctionSignature[];
}
