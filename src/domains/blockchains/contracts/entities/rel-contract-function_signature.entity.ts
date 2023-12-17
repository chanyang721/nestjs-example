import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity }                            from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                              from "./contract.entity";
import { FunctionSignature }                     from "./function-signature.entity";



@Entity( { name: "rel_contract_function_signature" } )
export class RelContractFunctionSignature extends BaseEntity {
    @Column()
    contract_id: string;
    
    @Column()
    function_signature_id: string;
    
    @ManyToOne(
    () => Contract,
    contract => contract.rel_contract_function_signatures )
    @JoinColumn( { name: "contract_id" } )
    contract: Contract;
    
    @ManyToOne(
        () => FunctionSignature,
        functionSignature => functionSignature.rel_contract_function_signatures )
    @JoinColumn( { name: "function_signature_id" } )
    function_signature: FunctionSignature;
}