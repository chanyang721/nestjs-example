import { Controller }     from "@nestjs/common";
import { AnwsersService } from "./anwsers.service";



@Controller( "anwsers" )
export class AnwsersController {
    constructor( private readonly anwsersService: AnwsersService ) {
    }
}
