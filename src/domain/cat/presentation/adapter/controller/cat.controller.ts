import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ApiTags }                                           from "@nestjs/swagger";
import { HttpService }        from "@nestjs/axios";
import { Public }            from "../../../../../lib/decoretor";
import { CatCommandService } from "../../../application/service/cat.command.service";
import { CreateCatDto }      from "../dto/create.cats.dto";




@Public()
@ApiTags("cat")
@Controller("cat")
export class CatController {
  constructor(
    private readonly catsService: CatCommandService,
    private readonly httpService: HttpService
  ) {}


  /**
   * @description [ GET ] Cats API
   * @description Test용 API
   * @param body CreateCatDto
   * @returns CreateCatDto
   */
  @Post()
  async createCat( @Body() body: CreateCatDto ): Promise<CreateCatDto> {
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
  }

}
