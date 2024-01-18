import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { Injectable, Logger }                 from "@nestjs/common";



@Injectable()
export class AzureStorageService {
    private readonly logger: Logger = new Logger( AzureStorageService.name );
    private readonly AZURE_STORAGE_CONNECTION_STRING: string;
    private readonly blobServiceClient: BlobServiceClient;
    
    
    constructor() {
        this.AZURE_STORAGE_CONNECTION_STRING =
          process.env.AZURE_STORAGE_CONNECTION_STRING;
        
        if ( this.AZURE_STORAGE_CONNECTION_STRING ) {
            this.logger.debug( "AZURE_STORAGE is connected" );
            this.blobServiceClient = BlobServiceClient.fromConnectionString(
              this.AZURE_STORAGE_CONNECTION_STRING
            );
        }
        else {
            this.logger.debug( "AZURE_STORAGE_CONNECTION_STRING is undefined" );
        }
    }
    
    
    async uploadFile(
      containerName: string,
      path: string,
      blobName: string,
      file: Buffer
    ): Promise<string> {
        const containerClient: ContainerClient =
          this.blobServiceClient.getContainerClient( containerName );
        await containerClient.createIfNotExists( { access: "container" } );
        
        const blockBlobClient = containerClient.getBlockBlobClient(
          `${ path }/${ blobName }`
        );
        const uploadBlobResponse = await blockBlobClient.upload( file, file.length, {
            blobHTTPHeaders: { blobContentType: "image/png" }
        } );
        
        this.logger.debug(
          `File ${ blobName } uploaded at ${ containerName } container, requestId: ${ uploadBlobResponse.requestId }`
        );
        return blockBlobClient.url;
    }
    
    
    async deleteFile( containerName: string, filePath: string ) {
        const containerClient: ContainerClient =
          this.blobServiceClient.getContainerClient( containerName );
        const blobs = containerClient.listBlobsByHierarchy( containerName, {
            prefix: filePath
        } );
        
        for await ( const blob of blobs ) {
            const blobClient = containerClient.getBlobClient( blob.name );
            await blobClient.deleteIfExists();
            console.log( `${ containerName }/${ filePath } Blob deleted: ${ blob.name }` );
        }
    }
}
