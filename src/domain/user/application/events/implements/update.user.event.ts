import { UpdateUserDto } from "../../../presentation/dtos/update.user.dto";



export class UpdateUserEvent {
  constructor(
    private readonly updateUserDto: UpdateUserDto
  ) {}
}
