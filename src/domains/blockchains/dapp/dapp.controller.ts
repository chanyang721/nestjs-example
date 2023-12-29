import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AnyFilesInterceptor }                                   from "@nestjs/platform-express";
import { HttpStatusCode }                                        from "axios";
import { ResponseDto }                                           from "../../../libs/fundamentals/interceptors/response/dto/response.dto";
import { multerOptions }                                         from "../../../libs/helpers/multer/options";
import { DappService }                                           from "./dapp.service";
import { Dapp }                                                  from "./entities/dapp.entity";



@Controller( "dapp" )
export class DappController {
    constructor( private readonly dappService: DappService ) {
    }
    
    
    @Post()
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    async registerDapp(
      @UploadedFile() files: Express.Multer.File,
      @Body() registerDappDto: any
    ): Promise<ResponseDto<Dapp>> {
        const newDapp: Dapp = await this.dappService.registerDapp( files, registerDappDto );
        return new ResponseDto({
            statusCode: HttpStatusCode.Created,
            message: '',
            data: newDapp
        })
    }
}
