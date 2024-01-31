import { Spot } from "@binance/connector-typescript";
import { Injectable } from "@nestjs/common";
import { CommonConfigService } from "../../config/common.config.service";



@Injectable()
export class BinanceConnectService {
    private readonly binanceClient: Spot;
    
    
    constructor(
      private readonly commonConfigService: CommonConfigService
    ) {
        const { apiKey, secretKey, baseUrl } = this.commonConfigService.binanceConfig;
        this.binanceClient = new Spot( apiKey, secretKey, { baseURL: baseUrl } );
        
        console.log( this.binanceClient );
    }
}