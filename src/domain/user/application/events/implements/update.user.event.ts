import { UpdateUserDto } from "../../../presentation/dtos/update.user.dto";
import { UserModelDto }  from "../../../presentation/dtos/user.model.dto";



export class UpdateUserEvent {
  constructor(
    private readonly userModelDto: UserModelDto
  ) {}
}
