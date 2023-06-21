import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CatsService }                                       from "./cats.service";



@Controller("cats")
export class CatsController {
  constructor( private readonly catsService: CatsService ) {
  }


}
