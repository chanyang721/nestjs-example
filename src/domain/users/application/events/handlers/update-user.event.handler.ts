import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserCommandRepository }        from "../../../infrastructure/repositories/user.command.repository";
import { UserModelDto }                 from "../../../presentation/dtos/user.model.dto";



export class UpdateUserEventImplement {
    constructor(
      public readonly userModelDto: UserModelDto
    ) {
    }
}


@EventsHandler( UpdateUserEventImplement )
export class UpdateUserEventHandler implements IEventHandler<UpdateUserEventImplement> {
    constructor(
      /**
       * Repository, Message Queue, etc injection
       */
      private readonly userRepository: UserCommandRepository
    ) {
    }
    
    
    handle( event: UpdateUserEventImplement ) {
        console.log( "UpdateUserEventImplement :", event );
        /**
         * The event handler only mutates the aggregate state, no logic there!
         */
        console.log( event.userModelDto );
        // const a = this.kafkaService.sendMessage('test-topic', 'Hello World!');
        // console.log("UpdateUserEvent :", a)
    }
}
