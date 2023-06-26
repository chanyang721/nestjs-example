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
    if (a === null) {
      throw new HttpException("Bad Request", 400)
    }
    console.log(b)

    return b
  }
}
