import { PickType } from "@nestjs/mapped-types";
import { Dapp }     from "../entities/dapp.entity";



export class DappDto extends PickType( Dapp, [
    "name",
    "url",
    "logo",
    "description",
    "claim_address",
    "verification_code"
] ) {
    constructor(inputData: Dapp) {
        super();
        this.name = inputData.name
        this.url = inputData.url
        this.logo = inputData.logo
        this.description = inputData.description
        this.verification_code = inputData.verification_code
    }
}