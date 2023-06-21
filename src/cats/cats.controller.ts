import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CatsService }                                                                  from "./cats.service";



@Controller("cats")
export class CatsController {
  constructor( private readonly catsService: CatsService ) {
  }

  @Get()
  async getCats() {
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST)
  }
}
