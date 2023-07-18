import { QueryHandler }              from "@nestjs/cqrs";
import { FindUserInfoWithAuthQuery } from "../impl/find-user-info-with-auth.query";
import { UserQueryRepository }       from "../../../infrastructure/repositories/user.query.repository";



@QueryHandler(FindUserInfoWithAuthQuery)
export class FindUserInfoWithAuthQueryHandler {
  constructor(
    private readonly userQueryRepository: UserQueryRepository
  ) {}

  public async execute( query: FindUserInfoWithAuthQuery ): Promise<any> {
    return await this.userQueryRepository.findUserInfoWithAuth(query);
  }

}
