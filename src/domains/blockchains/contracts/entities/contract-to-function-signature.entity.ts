import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity }                            from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                              from "./contract.entity";
import { FunctionSignature }                     from "./function-signature.entity";



@Entity( { name: "contract-to-function-signature" } )
export class ContractToFunctionSignature extends BaseEntity {
    @Column()
    contract_id: string;
    
    @Column()
    func_signature: string;
    
    @ManyToOne(
      () => Contract,
      contract => contract.contract_to_function_signatures )
    @JoinColumn( { name: "contract_id" } )
    contract: Contract;
    
    @ManyToOne(
      () => FunctionSignature,
      functionSignature => functionSignature.contract_to_function_signatures )
    @JoinColumn( { name: "func_signature", referencedColumnName: 'signature' } )
    function_signature: FunctionSignature;
}