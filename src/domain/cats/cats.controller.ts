import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CatsService }                                                                  from "./cats.service";
import { IsNumber, IsOptional, IsString }                                               from "class-validator";

export class CreateCatDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  breed: string;
}

@Controller("cats")
export class CatsController {
  constructor( private readonly catsService: CatsService ) {
  }

  @Get()
  async getCats(
    @Body() body: CreateCatDto,
  ) {
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST)
  }
}
