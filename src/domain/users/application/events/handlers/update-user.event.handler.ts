import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdateUserEvent }              from '../implements';
import { UserCommandRepository }        from '../../../infrastructure/repositories/user.command.repository';



@EventsHandler( UpdateUserEvent )
export class UpdateUserEventHandler implements IEventHandler<UpdateUserEvent> {
    constructor(
        /**
         * Repository, Message Queue, etc injection
         */
        private readonly userRepository: UserCommandRepository,
    ) {
    }
    
    
    handle( event: UpdateUserEvent ) {
        console.log( 'UpdateUserEvent :', event );
        /**
         * The event handler only mutates the aggregate state, no logic there!
         */
        console.log( event.userModelDto );
        // const a = this.kafkaService.sendMessage('test-topic', 'Hello World!');
        // console.log("UpdateUserEvent :", a)
    }
}
