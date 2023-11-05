import { AggregateRoot }   from "@nestjs/cqrs";



export class ProjectAggregate extends AggregateRoot {
    constructor(
    
    ) {
        super();
        this.autoCommit = true;
    }
    
    
    /**
    
     * TODO: Project + Groups + Files 정보 모델링
     */
    
    
    /**
     * TODO: Project + Groups + Files 정보 생성
     */
    public async emitUpdateProjectModel() {
        /**
         * 이벤트 발행 이 후, 해당 event handler 에서 비즈니스 로직 처리
         * Aggregate method then creates an event and calls this When or Apply method to handle the event
         */
    }
}

