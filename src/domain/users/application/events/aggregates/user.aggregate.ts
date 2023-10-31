import { AggregateRoot }   from "@nestjs/cqrs";
import { UpdateUserDto }   from "../../../presentation/dtos/update.user.dto";
import { UpdateUserEvent } from "../implements";



export class UserAggregate extends AggregateRoot {
    constructor(
      public readonly updateUserDto: UpdateUserDto
    ) {
        super();
        this.autoCommit = true;
    }
    
    
    /**
     * TODO: User + Auth 정보 모델링
     */
    
    
    /**
     * TODO: User + Auth 정보 생성
     */
    public async emitUpdateUserModel() {
        /**
         * 이벤트 발행 이 후, 해당 event handler 에서 비즈니스 로직 처리
         * Aggregate method then creates an event and calls this When or Apply method to handle the event
         */
        this.apply( new UpdateUserEvent( this.updateUserDto ) );
    }
}
