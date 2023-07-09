import { Injectable } from "@nestjs/common";



@Injectable()
export class CatQueryService {
  constructor( // @Inject(CACHE_MANAGER) private cacheManager: Cache,
    // private readonly catsRepository: CatsQueryRepository,
    // private queryBus: QueryBus
  ) {
  }


  public async saveCache( data: any ) {
    // const a = await this.cacheManager.set("data", data);
    // const b = await this.cacheManager.get("data");
    // if ( b === undefined ) {
    //   throw new HttpException("b exist", 400);
    // }

    // await this.cacheManager.del("data");
    // const b_del = await this.cacheManager.get("data");
    // if (b_del === undefined) {
    //   throw new HttpException("b deleted", 400)
    // }

    // return b;
  }
}
