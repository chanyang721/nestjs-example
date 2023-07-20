import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UpdateUserEvent }              from "../implements/update.user.event";
import { UserCommandRepository }        from "../../../infrastructure/repositories/user.command.repository";




@EventsHandler(UpdateUserEvent)
export class UpdateUserEventHandler implements IEventHandler<UpdateUserEvent> {
  constructor(
    /**
     * Repository injection
     */
    private readonly userRepository: UserCommandRepository
  ) {}

  handle(event: UpdateUserEvent) {
    console.log("UpdateUserEvent :", event)
    /**
     * Business logic
     */
  }
}
