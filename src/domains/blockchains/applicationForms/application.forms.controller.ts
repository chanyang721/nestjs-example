import { CacheKey, CacheTTL } from "@nestjs/cache-manager";
import { Controller, Get }    from "@nestjs/common";
import { ApplicationFormsService } from "./application.forms.service";



@Controller( "applications-form" )
export class ApplicationFormsController {
    constructor(
       private readonly applicationFormsService: ApplicationFormsService
    ) {
    }
    
    @Get('')
    @CacheKey(`application-form`)
    @CacheTTL(10_000)
    async registerApplicationForm() {
    
    }
 }
