import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { Injectable, Logger }                 from "@nestjs/common";
import { CommonConfigService }                from "../../config/common.config.service";



@Injectable()
export class AzureStorageService {
    private readonly logger: Logger = new Logger( AzureStorageService.name );
    private readonly AZURE_STORAGE_CONNECTION_STRING: string;
    private readonly blobServiceClient: BlobServiceClient;
    
    
    constructor(
        private readonly commonConfigService: CommonConfigService
    ) {
        this.AZURE_STORAGE_CONNECTION_STRING = this.commonConfigService.accessAzureConfig.storageConnectionString;
        this.blobServiceClient = BlobServiceClient.fromConnectionString( this.AZURE_STORAGE_CONNECTION_STRING );
        this.logger.log(this.blobServiceClient)
    }
    
    
    async uploadFile( containerName: string, blobName: string, file: Buffer ): Promise<string> {
        const containerClient: ContainerClient = this.blobServiceClient.getContainerClient( containerName );
        await containerClient.createIfNotExists();
        
        const blockBlobClient = containerClient.getBlockBlobClient( blobName );
        const uploadBlobResponse = await blockBlobClient.upload( file, file.length );
        
        return `File uploaded. ETag: ${ uploadBlobResponse.etag }, requestId: ${ uploadBlobResponse.requestId }`;
    }
}