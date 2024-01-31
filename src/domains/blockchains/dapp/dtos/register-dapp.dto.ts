import { PickType } from "@nestjs/mapped-types";
import { Dapp } from "../entities/dapp.entity";



export class RegisterDappDto extends PickType( Dapp, [
    "name",
    "url",
    "logo",
    "claim_address",
    "description"
] ) {
    constructor() {
        super();
    }
}