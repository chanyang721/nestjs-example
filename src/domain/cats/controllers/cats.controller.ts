import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { CatsService }                                                   from "../services/cats.service";
import { Public }                                                        from "../../../decoretors";
import { CreateCatDto }                                                  from "../dto/create.cats.dto";
import { HttpService }                                                   from "@nestjs/axios";



@Public()
@Controller("cats")
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly httpService: HttpService
  ) {}


  @Post()
  async getCats( @Body() body: CreateCatDto ) {
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
  }


  @Get()
  async getTest(
    @Param() params: any
  ) {
    console.log(params);
    return this.httpService.get(`http://localhost:4000/health-checker`).toPromise();
  }


  @Get("cache/:data")
  async getCache(
    @Param() data: any
  ) {
    return await this.catsService.saveCache(data);
  }
}
