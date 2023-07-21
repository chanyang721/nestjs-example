import { AggregateRoot } from "@nestjs/cqrs";



export class UserAggregate extends AggregateRoot {
  constructor () {
    super();
    this.autoCommit = true;
  }


  /**
   * TODO: User + Auth 정보 모델링
   */


}
