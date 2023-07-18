import { UserRole } from "../../infrastructure/entities/enums/user.enum.role";



export class CreateUserCommand {
  constructor(
    public readonly role: UserRole
  ) {
  }
}
