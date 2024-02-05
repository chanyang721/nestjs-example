import { PickType } from '@nestjs/swagger';
import { UserEntityDto } from './user.entity.dto';



export class UpdateUserDto extends PickType( UserEntityDto, [ 'role', 'thumbnail' ] ) {
}
