import { Body, Controller, Logger, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor }                                               from "@nestjs/platform-express";
import { HttpStatusCode }                                                from "axios";
import { ResponseDto }                                                   from "../../../libs/fundamentals/interceptors/response/dto/response.dto";
import { multerOptions }                                                 from "../../../libs/helpers/multer/options";
import { Public }                                                        from "../../../libs/utils/decoretors";
import { DappService }                                                   from "./dapp.service";
import { RegisterDappDto }                                               from "./dtos/register-dapp.dto";
import { SendMailDto }                                                   from "./dtos/send-mail.dto";
import { Dapp }                                                          from "./entities/dapp.entity";



@Controller( "dapp" )
export class DappController {
    private readonly logger: Logger = new Logger( DappController.name );
    
    
    constructor( private readonly dappService: DappService ) {
    }
    
    
    @Public()
    @Post()
    @UseInterceptors( FileInterceptor( "logo", multerOptions ) )
    async registerDapp(
      @UploadedFile() logo: Express.Multer.File,
      @Body() registerDappDto: RegisterDappDto
    ): Promise<ResponseDto<Dapp>> {
        const newDapp: Dapp = await this.dappService.registerDapp( logo, registerDappDto );
        
        return new ResponseDto( {
            statusCode: HttpStatusCode.Created,
            message   : "Dapp 신청이 완료되었습니다",
            data      : newDapp
        } );
    }
    
    
    @Public()
    @Post( "mail" )
    async sendMail(
        @Body() sendMailDto: SendMailDto
    ) {
        return this.dappService.sendMail(sendMailDto);
    }
}
