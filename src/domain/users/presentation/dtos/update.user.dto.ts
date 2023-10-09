import { UserEntityDto } from './user.entity.dto';
import { PickType }      from '@nestjs/swagger';



export class UpdateUserDto extends PickType( UserEntityDto, [ 'role', 'thumbnail' ] ) {
}
