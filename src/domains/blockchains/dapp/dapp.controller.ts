import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AnyFilesInterceptor }                                   from "@nestjs/platform-express";
import { multerOptions }                                   from "../../../libs/helpers/multer/options";
import { DappService }                                     from "./dapp.service";



@Controller( "dapp" )
export class DappController {
    constructor( private readonly dappService: DappService ) {
    }
    
    
    @Post()
    @UseInterceptors( AnyFilesInterceptor( multerOptions ) )
    async registerDapp(
        @UploadedFile() files: Express.Multer.File,
        @Body() registerDappDto: any
    ) {
        await this.dappService.registerDapp(files, registerDappDto)
    }
}
