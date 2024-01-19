import { PickType }            from "@nestjs/mapped-types";
import { ApplicationFormDapp } from "../entities/application.form.dapp.entity";



export class ApplicationFormDappDto extends PickType( ApplicationFormDapp, [
    "name",
    "logo",
    "description",
    "claim_address",
    "url",
    'application_form_id'
] ) {
    
    constructor( inputData: ApplicationFormDappDto ) {
        super();
        this.name = inputData.name;
        this.url = inputData.url;
        this.logo = inputData.logo;
        this.description = inputData.description;
        this.claim_address = inputData.claim_address;
        this.application_form_id = inputData.application_form_id
    }
}