import { HttpException, Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER }                     from "@nestjs/cache-manager";
import { CommandBus }                        from "@nestjs/cqrs";
import { Cache }                             from "cache-manager";
import { CatsCommandRepository }             from "../../intrastructure/repository/command/cats.command.repository";
import { KillCatCommand }       from "../command/kill.cat.command";
import { CreateOrUpdateCatDto } from "../../presentation/dto/create.cats.dto";



@Injectable()
export class CatCommandService {
  constructor(
    // @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly catsRepository: CatsCommandRepository,
    private commandBus: CommandBus
  ) {}

  // async killCat(userId: string, killCatDto: any) {
  //   console.log("CatCommandService :", userId, killCatDto)
  //   const sendMessageToBus = await this.commandBus.execute(
  //     new KillCatCommand(userId, killCatDto.catId)
  //   );
  //   console.log(sendMessageToBus)
  //
  //   /**
  //    *
  //    */
  //
  //   return sendMessageToBus
  // }

  public async createOrUpdateCat( CreateOrUpdateCatDto: any ) {
    return await this.catsRepository.createOrUpdateCat(CreateOrUpdateCatDto);
  }
}
