import { Injectable }                from "@nestjs/common";
import { CommandBus, QueryBus }      from "@nestjs/cqrs";
import { CreateUserDto }             from "../../presentation/dtos/create.user.dto";
import { CreateUserCommand }         from "../commands/create-user.command";
import { FindUserInfoWithAuthQuery } from "../queries/find-user-info-with-auth.query";



@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly querybus: QueryBus
  ) {
  }

  public async findUserInfoWithAuth( body: any ): Promise<any> {
    await this.querybus.execute(
      new FindUserInfoWithAuthQuery(body)
    )
  }


  public async createUser( createUserDto: CreateUserDto ): Promise<any> {
    return await this.commandBus.execute(
      new CreateUserCommand(createUserDto.role)
    )
  }
}
