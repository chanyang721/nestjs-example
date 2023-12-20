import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Dapp }                                 from "../../../dapp/entities/dapp.entity";
import { Contract }                             from "../contract.entity";
import { ContractAgreementSup }                 from "../supports/contract-agreement-sup.entity";



@Entity( { name: "contract_temp" } )
export class ContractTemp extends Contract {
    /*
     * Columns
     * */
    @Column( { comment: "약관 동의" } )
    terms: boolean;
    
    
    /*
     * FK Column
     * */
    @Column()
    dapp_id: string;
    
    @Column()
    agreement_id: string;
    
    /*
     * Relations
     * */
    @OneToOne( () => Dapp )
    @JoinColumn( { name: "dapp_id" } )
    dapp: Dapp;
    
    @OneToOne( () => ContractAgreementSup )
    @JoinColumn( { name: "agreement_id" } )
    contract_agreement: ContractAgreementSup;
}