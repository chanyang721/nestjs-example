import { HttpException, Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER }                     from "@nestjs/cache-manager";
import { CommandBus }                        from "@nestjs/cqrs";
import { Cache }                 from "cache-manager";
import { CatsCommandRepository } from "../../intrastructure/repository/command/cats.command.repository";
import { KillCatCommand }        from "../command/kill.cat.command";



@Injectable()
export class CatsCommandService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly catsRepository: CatsCommandRepository,
    private commandBus: CommandBus
  ) {}


  async killCat(heroId: string, killCatDto: any) {
    const sendMessageToBus = await this.commandBus.execute(
      new KillCatCommand(heroId, killCatDto.dragonId)
    );

    /**
     *
     */

    return
  }

  public async saveCache( data: any ) {
    const a = await this.cacheManager.set("data", data);
    const b = await this.cacheManager.get("data");
    if (b === undefined) {
      throw new HttpException("b exist", 400)
    }

    // await this.cacheManager.del("data");
    // const b_del = await this.cacheManager.get("data");
    // if (b_del === undefined) {
    //   throw new HttpException("b deleted", 400)
    // }

    return b
  }


  public async getCatBy( id: string ): Promise<any> {
    let cat = await this.cacheManager.get("id");
    if (cat === undefined) {
      cat = await this.catsRepository.getCatBy(id);
    }
    return cat;
  }
}
