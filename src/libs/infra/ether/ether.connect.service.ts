import { Injectable } from "@nestjs/common";
import { ethers } from "ethers";
import { CommonConfigService } from "../../config/common.config.service";



@Injectable()
export class EtherConnectService {
    private readonly rpcUrl: string;
    private provider: ethers.JsonRpcProvider;
    
    
    constructor(
      private readonly commonConfigService: CommonConfigService
    ) {
        const { provider_env, mainnet_url, testnet_url } = commonConfigService.etherConnectConfig;
        this.rpcUrl = provider_env === "testnet"
          ? testnet_url
          : mainnet_url;
        
        this.setProvider();
    }
    
    
    setProvider() {
        try {
            if ( !this.provider ) {
                this.provider = new ethers.JsonRpcProvider( this.rpcUrl );
            }
        }
        catch ( error ) {
            console.log( error.message );
            this.setProvider();
        }
    }
    
    
    async getProvider() {
        return this.provider;
    }
}