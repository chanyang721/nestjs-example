import { QueryHandler }        from "@nestjs/cqrs";
import { UserQueryRepository } from "../../../infrastructure/repositories/user.query.repository";


export class FindUserQueryImplements {
    constructor(
      public userId: string
    ) {
    }
}

@QueryHandler( FindUserQueryImplements )
export class FindUserInfoWithAuthQueryHandler {
    constructor(
      private readonly userQueryRepository: UserQueryRepository
    ) {
    }
    
    
    public async execute( query: FindUserQueryImplements ): Promise<any> {
        
        return await this.userQueryRepository.findUserInfoWithAuth( query );
    }
    
}
