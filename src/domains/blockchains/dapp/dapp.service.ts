import { Injectable }          from "@nestjs/common";
import { AzureStorageService } from "../../../libs/infra/azure/azure.storage.service";



@Injectable()
export class DappService {
    private readonly CONTAINER_NAME: string;
    
    
    constructor(
      private readonly azureStorageService: AzureStorageService
    ) {
    }
    
    
    public async registerDapp( file: Express.Multer.File, registerDappDto: any ): Promise<any> {
        return await this.azureStorageService.uploadFile( this.CONTAINER_NAME, file.originalname, file.buffer );
    }
}
