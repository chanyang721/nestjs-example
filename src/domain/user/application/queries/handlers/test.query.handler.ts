import { QueryHandler }              from "@nestjs/cqrs";
import { FindUserInfoWithAuthQuery } from "../find-user-info-with-auth.query";
import { UserRepository }            from "../../../infrastructure/repositories/user.repository";



@QueryHandler(FindUserInfoWithAuthQuery)
export class FindUserInfoWithAuthQueryHandler {
  constructor(
    // private readonly userRepository: UserRepository
  ) {}

  public async execute( query: FindUserInfoWithAuthQuery ): Promise<any> {
    // return await this.userRepository.findUserInfoWithAuth(query.body);
  }

}
