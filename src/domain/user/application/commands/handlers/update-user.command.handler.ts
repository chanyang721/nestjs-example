import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { UpdateUserCommand }                               from "../implements/update-user.command";
import { UserCommandRepository }                           from "../../../infrastructure/repositories/user.command.repository";



@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private readonly userRepository: UserCommandRepository,
    private readonly eventPublisher: EventPublisher
  ) {
  }


  public async execute( command: UpdateUserCommand ) {
    console.log("UpdateUserCommandHandler :", command);

    return this.eventPublisher.mergeObjectContext(
      await this.userRepository.updateUser(command)
    );
  }
}
