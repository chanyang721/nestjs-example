import { UserEntityDto } from "./user.entity.dto";
import { PickType }      from "@nestjs/swagger";



export class CreateUserDto extends PickType(UserEntityDto, [ "role" ]) {
}
