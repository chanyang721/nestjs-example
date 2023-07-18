import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand }               from "../create-user.command";
import { UserRepository }    from "../../../infrastructure/repositories/user.repository";



@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  public async execute( command: CreateUserCommand ) {
    console.log("CreateUserCommandHandler :", command)
    /**
     *
     */
    return command
  }
}
