import { Body, Controller, Get, Logger, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor }                                                                         from "@nestjs/platform-express";
import { HttpStatusCode }                                                                          from "axios";
import { ResponseDto }                                                                             from "../../../libs/fundamentals/interceptors/response/dto/response.dto";
import { multerOptions }                                                                           from "../../../libs/helpers/multer/options";
import { Public, Roles }                                                                           from "../../../libs/utils/decoretors";
import { USER_ROLE }                                                                               from "../../users/infrastructure/entities/enums";
import { DappService }                                                                             from "./dapp.service";
import { DappDto }                                                                                 from "./dtos/dapp.dto";
import { RegisterDappDto }                                                                         from "./dtos/register-dapp.dto";
import { SendMailDto }                                                                             from "./dtos/send-mail.dto";



@Controller( "dapp" )
export class DappController {
    private readonly logger: Logger = new Logger( DappController.name );
    
    
    constructor( private readonly dappService: DappService ) {
    }
    
    
    @Public()
    @Get( "/:code" )
    async findDappByVerificationCode(
      @Param( "code", ParseIntPipe ) code: string
    ): Promise<ResponseDto<DappDto>> {
        const dappDto: DappDto = await this.dappService.findDappByVerificationCode( code );
        
        return new ResponseDto( {
            statusCode: HttpStatusCode.Ok,
            message   : "인증이 완료되었습니다.",
            data      : dappDto
        } );
    }
    
    
    @Roles( USER_ROLE.ADMIN )
    @Post()
    @UseInterceptors( FileInterceptor( "file", multerOptions ) )
    async registerDapp(
      @UploadedFile() file: Express.Multer.File,
      @Body() registerDappDto: RegisterDappDto
    ): Promise<ResponseDto<DappDto>> {
        const newDapp: DappDto = await this.dappService.registerDapp( file, registerDappDto );
        
        return new ResponseDto( {
            statusCode: HttpStatusCode.Created,
            message   : "Dapp 신청이 완료되었습니다",
            data      : newDapp
        } );
    }
    
    
    @Public()
    @Post( "email" )
    async sendMail(
      @Body() sendMailDto: SendMailDto
    ) {
        return this.dappService.sendMail( sendMailDto );
    }
}
