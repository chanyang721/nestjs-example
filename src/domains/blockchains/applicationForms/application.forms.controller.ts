import { Controller }              from "@nestjs/common";
import { ApplicationFormsService } from "./application.forms.service";



@Controller( "applications-form" )
export class ApplicationFormsController {
    constructor( private readonly applicationFormsService: ApplicationFormsService ) {
    }
    
    
}
