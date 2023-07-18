import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserRepository }               from "../../../infrastructure/repositories/user.repository";
import { HeroKilledDragonEvent }        from "../test.event";



@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
  constructor(
    /**
     * Repository injection
     */
    private readonly userRepository: UserRepository
  ) {}

  handle(event: HeroKilledDragonEvent) {
    /**
     * Business logic
     */
  }
}
