import { HttpException, Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER }                     from "@nestjs/cache-manager";
import { Cache }              from "cache-manager";



@Injectable()
export class CatsService {
  constructor( @Inject(CACHE_MANAGER) private cacheManager: Cache ) {

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
}
