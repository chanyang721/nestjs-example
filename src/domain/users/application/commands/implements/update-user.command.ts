import { UpdateUserDto } from '../../../presentation/dtos/update.user.dto';



export class UpdateUserCommand {
    constructor(
        public readonly updateUserDto: UpdateUserDto,
    ) {
    }
}
