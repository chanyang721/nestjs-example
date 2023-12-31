import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity }          from "../../../../libs/database/orm/typeorm/base/base.entity";
import { TermsAgreementSub }   from "./terms-agreement-sub.entity";
import { ContractApplication } from "./contract-application.entity";



@Entity( { name: "terms_agreement" } )
export class TermsAgreement extends BaseEntity {
    @Column( { comment: "약관 동의 여부" } )
    agreement: boolean;
    
    @Column( { type: "uuid" } )
    contract_application_id: string;
    
    @Column( { type: "uuid" } )
    terms_agreement_sub_id: string;
    
    @ManyToOne( () => ContractApplication )
    @JoinColumn( { name: "contract_application_id" } )
    contract_temp: ContractApplication;
    
    @ManyToOne( () => TermsAgreementSub )
    @JoinColumn( { name: "terms_agreement_sub_id" } )
    terms_agreement_sup: TermsAgreementSub;
}
