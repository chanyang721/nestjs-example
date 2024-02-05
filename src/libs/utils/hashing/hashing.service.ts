import { Injectable } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { CommonConfigService } from '../../config/common.config.service';



@Injectable()
export class HashingService {
  private readonly hashingConfig = this.commonConfigService.HashingConfig;
  
  
  constructor( private readonly commonConfigService: CommonConfigService ) {
  }
  
  
  public async hashingTarget( target: string ): Promise<string> {
    const salt = await bcrypt.genSalt( this.hashingConfig.saltRound );
    return await bcrypt.hash( target, salt );
  }
  
  
  public async compare( plain: string, hashed_target: string ): Promise<boolean> {
    return await bcrypt.compare( plain, hashed_target );
  }
  
}
