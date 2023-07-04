import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { KillCatCommand }                                  from "../command/kill.cat.command";



@CommandHandler(KillCatCommand)
export class KillCatHandler implements ICommandHandler<KillCatCommand> {
  constructor(
    /**
    * TODO
     * 1. Command 관련 레포지토리 인젝션
     * 2. Event Publisher 인젝션
    */
    private publisher: EventPublisher,
  ) {}

  public async execute( command: KillCatCommand ) {
    const { userId, catId } = command;
    // const cat = this.publisher.mergeObjectContext(
    //
    // )
    /**
     * TODO:
     * 1. 레포지토리 메서드 내부에서 트렌젝션 실행
     * 2. kafka 메시지 전송 로직
     */
  }
}