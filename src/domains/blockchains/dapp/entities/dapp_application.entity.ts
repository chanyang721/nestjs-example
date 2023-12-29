import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { ApplicationProcessStatus }             from "../../contracts/entities/enums";
import { Dapp }                                 from "./dapp.entity";



@Entity( { name: "dapp_application" } )
export class DappApplication extends Dapp {
    
    /*
    * Application Columns
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
    * Relations
    * */
    @Column( { nullable: true, comment: "검수 완료되어 dapp 테이블에 저장되면 update" } )
    dapp_id: number;
    
    @OneToOne( () => Dapp, { nullable: true } )
    @JoinColumn( { name: "dapp_id" } )
    dapp: Dapp;
}
