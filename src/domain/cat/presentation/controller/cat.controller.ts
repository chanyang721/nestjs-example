import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags }                from "@nestjs/swagger";
import { HttpService }          from "@nestjs/axios";
import { Public }               from "../../../../lib/decoretor";
import { CatCommandService }    from "../../application/service/cat.command.service";
import { CreateOrUpdateCatDto } from "../dto/create.cats.dto";



@Public()
@ApiTags("cat")
@Controller("cat")
export class CatController {
  constructor(
    private readonly catsService: CatCommandService,
    private readonly httpService: HttpService
  ) {
  }


  @Post()
  async createOrUpdateCat(
    @Body() createOrUpdateCatDto: CreateOrUpdateCatDto
  ): Promise<any> {
    return await this.catsService.createOrUpdateCat(createOrUpdateCatDto);
  }

}
