import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../../libs/database/orm/typeorm/base/base.entity";



@Entity( { name: "contract_agreement_log" } )
export class ContractAgreementLog extends BaseEntity {
    
    @Column({ name: 'json' })
    log: object
    
}