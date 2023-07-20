import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand }                               from "../implements/create-user.command";
import { UserCommandRepository }                           from "../../../infrastructure/repositories/user.command.repository";



@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userRepository: UserCommandRepository,
    private readonly eventPublisher: EventPublisher
  ) {
  }


  public async execute( command: CreateUserCommand ) {
    console.log("CreateUserCommandHandler :", command);

    return await this.eventPublisher.mergeObjectContext(
      await this.userRepository.createUser(command)
    );
  }
}
