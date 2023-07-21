import { Injectable }           from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";



@Injectable()
export class ProjectService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }


}
