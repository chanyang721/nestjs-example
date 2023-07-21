import { QueryHandler }        from "@nestjs/cqrs";
import { FindUserQuery }       from "../implements";
import { UserQueryRepository } from "../../../infrastructure/repositories/user.query.repository";



@QueryHandler(FindUserQuery)
export class FindUserInfoWithAuthQueryHandler {
  constructor(
    private readonly userQueryRepository: UserQueryRepository,
    // private readonly cacheManager:
  ) {}

  public async execute( query: FindUserQuery ): Promise<any> {
    return await this.userQueryRepository.findUserInfoWithAuth(query);
  }

}
