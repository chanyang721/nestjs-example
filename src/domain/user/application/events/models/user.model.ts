import { AggregateRoot } from "@nestjs/cqrs";



export class User extends AggregateRoot {
  constructor () {
    super();
    this.autoCommit = true;
  }
}
