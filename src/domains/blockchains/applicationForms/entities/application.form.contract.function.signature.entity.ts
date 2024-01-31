import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../../libs/database/orm/typeorm/base/base.entity";
import { ApplicationFormContract } from "./application.form.contract.entity";



@Entity( { name: "application_form_contract_function_signature" } )
export class ApplicationFormContractFunctionSignature extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 30, comment: "함수 이름" } )
    name: string;
    
    @Column( { length: 255, comment: "함수 설명" } )
    description: string;
    
    /*
     * Index Columns
     * */
    @Column( { length: 8, unique: true, comment: "contract의 function 별 signature | ex) 74899a7p" } )
    signature: string;
    
    /*
     * FK Columns
     * */
    @Column( { type: "uuid" } )
    contract_id: string;
    
    /*
     * Relations
     * */
    @ManyToOne( () => ApplicationFormContract, applicationFormContract => applicationFormContract.function_signatures )
    @JoinColumn( { name: "contract_id" } )
    contract: ApplicationFormContract;
}