import { UserModelDto } from "../../../presentation/dtos/user.model.dto";



export class UpdateUserEvent {
    constructor(
      public readonly userModelDto: UserModelDto
    ) {
    }
}
