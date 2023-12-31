import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { DappApplication }                      from "../../dapp/entities/dapp_application.entity";
import { Contract }                             from "./contract.entity";
import { ApplicationProcessStatus }             from "./enums";



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
    process_status: ApplicationProcessStatus;
    
    @Column( { comment: "신청서 번호" } )
    application_number: number;
    
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