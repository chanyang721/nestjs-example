import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { CatsService }                                                   from "../services/cats.service";
import { Public }                                           from "../../../decoretors";
import { CreateCatDto }                                     from "../dto/create.cats.dto";





// @Public()
@Controller("cats")
export class CatsController {
  constructor( private readonly catsService: CatsService ) {
  }

  @Public()
  @Post()
  async getCats(
    @Body() body: CreateCatDto
  ) {
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
  }


  @Get()
  async getTest(
    @Param() params: any
  ) {

  }
}
