import { Controller }  from "@nestjs/common";
import { DappService } from "./dapp.service";



@Controller( "dapp" )
export class DappController {
    constructor( private readonly dappService: DappService ) {
    }
    
}
