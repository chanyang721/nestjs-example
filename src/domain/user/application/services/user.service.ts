import { Injectable }           from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { UpdateUserDto }     from "../../presentation/dtos/update.user.dto";
import { UpdateUserCommand } from "../commands/implements/update-user.command";



@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }


  public async updateUser( updateUserDto: UpdateUserDto ): Promise<any> {
    return await this.commandBus.execute(
      new UpdateUserCommand(updateUserDto)
    );
  }
}
