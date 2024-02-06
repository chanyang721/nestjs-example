import { APPLICATION_PROCESS_STATUS } from '@/blockchains/applicationForms/infrasturcture/entities/enums';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';



export class ApproveApplicationFormCommandImplement {
  constructor(
    public applicationFormId: string,
    public processStatus: APPLICATION_PROCESS_STATUS
  ) {
  }
}

@CommandHandler(ApproveApplicationFormCommandImplement)
export class ApproveApplicationFormCommandHandler
  implements ICommandHandler<ApproveApplicationFormCommandImplement> {
  
  async execute( command: ApproveApplicationFormCommandImplement ) {
    const { applicationFormId, processStatus } = command;
  }
}