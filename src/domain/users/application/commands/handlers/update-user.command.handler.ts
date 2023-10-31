import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { UserCommandRepository }                           from "../../../infrastructure/repositories/user.command.repository";
import { UserAggregate }                                   from "../../events/aggregates/user.aggregate";
import { UpdateUserCommand }                               from "../implements";



@CommandHandler( UpdateUserCommand )
export class UpdateUserCommandHandler implements ICommandHandler<UpdateUserCommand> {
    constructor(
      private readonly userRepository: UserCommandRepository,
      private readonly eventPublisher: EventPublisher
    ) {
    }
    
    
    public async execute( command: UpdateUserCommand ) {
        const updatedUserInfo = this.eventPublisher.mergeObjectContext(
          await this.userRepository.updateUser( command.updateUserDto )
        );
        
        const UserModel = this.eventPublisher.mergeClassContext( UserAggregate );
        const userModel = new UserModel( updatedUserInfo );
        await userModel.emitUpdateUserModel();
        
        return updatedUserInfo;
    }
}
