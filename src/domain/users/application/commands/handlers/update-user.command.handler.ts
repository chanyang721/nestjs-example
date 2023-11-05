import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { UserCommandRepository }                           from "../../../infrastructure/repositories/user.command.repository";
import { UpdateUserDto }                                   from "../../../presentation/dtos/update.user.dto";
import { UserAggregate }                                   from "../../events/aggregates/user.aggregate";



export class UpdateUserCommandImplement {
    constructor(
      public readonly updateUserDto: UpdateUserDto
    ) {
    }
}

@CommandHandler( UpdateUserCommandImplement )
export class UpdateUserCommandHandler implements ICommandHandler<UpdateUserCommandImplement> {
    constructor(
      private readonly userRepository: UserCommandRepository,
      private readonly eventPublisher: EventPublisher
    ) {
    }
    
    
    public async execute( command: UpdateUserCommandImplement ) {
        const updatedUserInfo = this.eventPublisher.mergeObjectContext(
          await this.userRepository.updateUser( command.updateUserDto )
        );
        
        const UserModel = this.eventPublisher.mergeClassContext( UserAggregate );
        const userModel = new UserModel( updatedUserInfo );
        await userModel.emitUpdateUserModel();
        
        return updatedUserInfo;
    }
}
