import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CreateUserEvent }              from "../implements/create.user.event";
import { UserCommandRepository }        from "../../../infrastructure/repositories/user.command.repository";




@EventsHandler(CreateUserEvent)
export class CreateUserEventHandler implements IEventHandler<CreateUserEvent> {
  constructor(
    /**
     * Repository injection
     */
    private readonly userRepository: UserCommandRepository
  ) {}

  handle(event: CreateUserEvent) {
    console.log("CreateUserEvent :", event)
    /**
     * Business logic
     */
  }
}
