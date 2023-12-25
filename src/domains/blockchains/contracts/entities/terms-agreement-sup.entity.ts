import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../libs/database/orm/typeorm/base/base.entity";



export enum ContractAgreementName {
    Disclaimer = "면책 고지",
    CollectionOfPersonal = "개인정보 수집 동의",
}


@Entity( { name: "terms_agreement_sup" } )
export class TermsAgreementSup extends BaseEntity {
    @Column( {
        type   : "enum",
        enum   : ContractAgreementName,
        comment: "약관 동의 종류"
    } )
    name: ContractAgreementName;
    
    @Column( { length: 2000, comment: "약관 동의 내용" } )
    contents: string;
    
    @Column( { default: true, comment: "약관 동의 필수 여부"} )
    required: boolean;
    
    @Column({ comment: '체크 박스 place holder' })
    required_contents: string
    
    @Column({ comment: '활성화 상태 여부' })
    is_active: boolean
    
    @Column( { comment: "약관 동의 버전" } )
    version: number;
}