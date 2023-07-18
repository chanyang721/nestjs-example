import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand }                               from "../impl/create-user.command";
import { UserRepository }                                  from "../../../infrastructure/repositories/user.repository";



@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly eventPublisher: EventPublisher
  ) {}

  public async execute( command: CreateUserCommand ) {
    console.log("CreateUserCommandHandler :", command)
    const user = await this.eventPublisher.mergeObjectContext(
      await this.userRepository.createUser(command)
    )
    console.log(user)
    return user
  }
}
