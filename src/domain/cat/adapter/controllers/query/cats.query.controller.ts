import { Controller, Get, Param, Query } from "@nestjs/common";
import { CatsCommandService }            from "../../../usecase/service/cats.command.service";
import { Public }                        from "../../../../../lib/decoretor";
import { HttpService }        from "@nestjs/axios";



@Public()
@Controller("cat")
export class CatQueryController {
  constructor(
    private readonly catsService: CatsCommandService,
    private readonly httpService: HttpService
  ) {}

}
