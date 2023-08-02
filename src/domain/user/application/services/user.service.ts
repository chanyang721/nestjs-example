import { Injectable }           from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { SubscribeTo }          from "../../../../libs/utils/decoretors";
import { UpdateUserDto }        from "../../presentation/dtos/update.user.dto";
import { UpdateUserCommand }    from "../commands/implements";


@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }

  @SubscribeTo('test-topic')
  async subscribeToTestTopic(message: string) {
    console.log('message', message);
  }

  public async updateUser( updateUserDto: UpdateUserDto ): Promise<any> {
    return await this.commandBus.execute(new UpdateUserCommand(updateUserDto));
  }
}
