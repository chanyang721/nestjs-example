import { QueryHandler }        from "@nestjs/cqrs";
import { UserQueryRepository } from "../../../infrastructure/repositories/user.query.repository";
import { FindUserQuery }       from "../implements";



@QueryHandler( FindUserQuery )
export class FindUserInfoWithAuthQueryHandler {
    constructor(
      private readonly userQueryRepository: UserQueryRepository
    ) {
    }
    
    
    public async execute( query: FindUserQuery ): Promise<any> {
        
        return await this.userQueryRepository.findUserInfoWithAuth( query );
    }
    
}
