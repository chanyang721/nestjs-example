import { Injectable } from '@nestjs/common';



@Injectable()
export class UserService {
  constructor(
    // private readonly commandBus: CommandBus,
    // private readonly queryBus: QueryBus
  ) {
  }
  
  
  public async updateUser( updateUserDto: any ): Promise<any> {
    // return await this.commandBus.execute( new UpdateUserCommandImplement( updateUserDto ) );
  }
}
