import { HttpException, Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER }                     from "@nestjs/cache-manager";
import { Cache }               from "cache-manager";
import { CatsQueryRepository } from "../../repository/query/cats.query.repository";
import { QueryBus }            from "@nestjs/cqrs";



@Injectable()
export class CatsQueryService {
  constructor( @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly catsRepository: CatsQueryRepository,
    private queryBus: QueryBus
  ) {
  }


  public async saveCache( data: any ) {
    const a = await this.cacheManager.set("data", data);
    const b = await this.cacheManager.get("data");
    if ( b === undefined ) {
      throw new HttpException("b exist", 400);
    }

    // await this.cacheManager.del("data");
    // const b_del = await this.cacheManager.get("data");
    // if (b_del === undefined) {
    //   throw new HttpException("b deleted", 400)
    // }

    return b;
  }
}
