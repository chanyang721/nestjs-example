import { PickType }                      from "@nestjs/mapped-types";
import { ApplicationFormTermsAgreement } from "../entities/application.form.terms.agreement.entity";



export enum TermsAgreementName {
    Disclaimer = "면책 고지",
    CollectionOfPersonal = "개인정보 수집 동의",
}


export class TermAgreementDto extends PickType( ApplicationFormTermsAgreement, [
    "name",
    "contents",
    "required",
    "required_contents"
] ) {
    
    constructor( inputData: ApplicationFormTermsAgreement ) {
        super()
        this.name = inputData.name;
        this.contents = inputData.contents;
        this.required = inputData.required;
        this.required_contents = inputData.required_contents;
    }
}