import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../../libs/database/orm/typeorm/base/base.entity";



export enum ContractAgreementName {
    Disclaimer = "면책 고지",
    CollectionOfPersonal = "개인 정보 수집",
}


@Entity( { name: "contract_agreement_sup" } )
export class ContractAgreementSup extends BaseEntity {
    @Column( {
        type   : "enum",
        enum   : ContractAgreementName,
        comment: "약관 동의 타입"
    } )
    name: ContractAgreementName;
    
    @Column( { length: 1000, comment: "약관 동의 내용" } )
    contents: string;
    
    @Column( { default: true, comment: "약관 동의 필수 여부"} )
    required: boolean;
    
    @Column( { comment: "약관 동의 버전" } )
    version: number;
}