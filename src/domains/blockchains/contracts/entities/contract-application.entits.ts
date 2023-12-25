import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { DappApplication }                                 from "../../dapp/entities/dapp_application.entity";

import { Contract } from "./contract.entity";

export enum ApplicationProcessStatus {
    APPLY = "APPLY",
    CHECK = "CHECK",
    REVIEWING = "REVIEWING",
    VERIFIED = "VERIFIED"
}

@Entity( { name: "contract_application" } )
export class ContractApplication extends Contract {
    /*
     * Columns
     * */
    @Column( {
        type   : "enum",
        enum   : ApplicationProcessStatus,
        default: ApplicationProcessStatus.APPLY
    } )
    verify_status: ApplicationProcessStatus;
    
    /*
     * FK Column
     * */
    @Column()
    dapp_application_id: string;
    
    @Column()
    contract_agreement_id: string;
    
    
    /*
     * Relations
     * */
    @OneToOne( () => DappApplication )
    @JoinColumn( { name: "dapp_application_id" } )
    dapp_application: DappApplication;
    
}