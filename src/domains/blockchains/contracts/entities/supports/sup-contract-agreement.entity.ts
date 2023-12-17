import { Column, Entity }        from "typeorm";
import { BaseEntity }            from "typeorm/browser";

export enum ContractAgreementName {
    Disclaimer  = "면책 고지",
    CollectionOfPersonal = '개인 정보 수집',
}

@Entity( { name: "sup_contract_agreement" } )
export class SupContractAgreement extends BaseEntity {
    @Column( {
        type   : "enum",
        enum   : ContractAgreementName,
        comment: "약관 동의 타입"
    } )
    agreement_name: ContractAgreementName;
    
    @Column( { length: 1000, comment: "약관 동의 내용" } )
    contents: string;
    
    @Column( { comment: "약관 동의 필수 여부" } )
    required: boolean;
    
    @Column( { comment: "약관 동의 버전" } )
    version: number;
}