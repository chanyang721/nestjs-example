import { CreateUserEvent }              from "../impl/create.user.event";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserRepository }               from "../../../infrastructure/repositories/user.repository";




@EventsHandler(CreateUserEvent)
export class CreateUserEventHandler implements IEventHandler<CreateUserEvent> {
  constructor(
    /**
     * Repository injection
     */
    private readonly userRepository: UserRepository
  ) {}

  handle(event: CreateUserEvent) {
    console.log("CreateUserEvent :", event)
    /**
     * Business logic
     */
  }
}
