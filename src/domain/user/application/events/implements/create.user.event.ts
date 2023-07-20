import { CreateUserDto } from "../../../presentation/dtos/create.user.dto";



export class CreateUserEvent {
  constructor(
    private readonly createUserDto: CreateUserDto
  ) {}
}
