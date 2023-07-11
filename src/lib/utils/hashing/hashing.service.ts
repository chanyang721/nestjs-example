import { Injectable }          from "@nestjs/common";
import bcrypt                  from "bcryptjs";
import { SharedConfigService } from "../../configuration/shared.config.service";



@Injectable()
export class HashingService {
  private readonly hashingConfig = this.sharedConfigService.HashingConfig;


  constructor( private readonly sharedConfigService: SharedConfigService ) {
  }


  public async hashingTarget( target: string ) {
    const salt = await bcrypt.genSalt(this.hashingConfig.saltRound);
    return await bcrypt.hash(target, salt);
  }


  public async compare( plain: string, hashed_target: string ) {
    return await bcrypt.compare(plain, hashed_target);
  }

}
