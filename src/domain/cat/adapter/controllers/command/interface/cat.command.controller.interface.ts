import { CreateCatDto } from "../../../dto/create.cats.dto";



export interface ICatCommandController {
  createCats(createCatsDto: CreateCatDto): Promise<any>;

}