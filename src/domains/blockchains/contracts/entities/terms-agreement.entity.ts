import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity }        from "../../../../libs/database/orm/typeorm/base/base.entity";
import { TermsAgreementSup } from "./terms-agreement-sup.entity";
import { ContractApplication }      from "./contract-application.entits";



@Entity( { name: "terms_agreement" } )
export class TermsAgreement extends BaseEntity {
    @Column( { comment: "약관 동의 여부" } )
    agreement: boolean;
    
    @Column( { type: "uuid" } )
    contract_application_id: string;
    
    @Column( { type: "uuid" } )
    terms_agreement_sup_id: string;
    
    @ManyToOne( () => ContractApplication )
    @JoinColumn( { name: "contract_application_id" } )
    contract_temp: ContractApplication;
    
    @ManyToOne( () => TermsAgreementSup )
    @JoinColumn( { name: "terms_agreement_sup_id" } )
    terms_agreement_sup: TermsAgreementSup;
}
