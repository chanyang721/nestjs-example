import { CacheKey, CacheTTL }                                                                             from "@nestjs/cache-manager";
import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { AnyFilesInterceptor, FileInterceptor }                                                           from "@nestjs/platform-express";
import { HttpStatusCode }                                                                                 from "axios";
import { ResponseDto }                                from "../../../libs/fundamentals/interceptors/response/dto/response.dto";
import { multerOptions }                                                                                  from "../../../libs/helpers/multer/options";
import { ApplicationFormsService }                    from "./application.forms.service";
import { RegisterApplicationFormDto }                                                    from "./dtos/register.application.form.dto";
import { ApplicationForm }                            from "./entities/application.form.entity";



@Controller( "applications-form" )
export class ApplicationFormsController {
    constructor(
      private readonly applicationFormsService: ApplicationFormsService
    ) {
    }
    
    
    // @CacheKey( `application-form` )
    // @CacheTTL( 10_000 )
    @Get( "/:id" )
    async getApplicationFormById(
      @Param( "id", ParseIntPipe ) applicationFormId: string
    ): Promise<any> {
        const applicationForm = await this.applicationFormsService.getApplicationFormById( applicationFormId );
        
        return new ResponseDto({
            statusCode: HttpStatusCode.Ok,
            message: `신청서 조회 완료`,
            data: applicationForm
        })
    }
    
    
    @Post( "" )
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    async registerApplicationForm(
      @UploadedFiles() files: Express.Multer.File[],
      @Body() registerApplicationFormDto: RegisterApplicationFormDto
    ): Promise<ResponseDto<boolean>>  {
        const newApplicationForm = await this.applicationFormsService.registerApplicationForm(registerApplicationFormDto, files)
        
        return new ResponseDto( {
            statusCode: HttpStatusCode.Created,
            message   : "신청서가 정상적으로 접수되었습니다.",
            data      : !!newApplicationForm
        } );
    }
}
