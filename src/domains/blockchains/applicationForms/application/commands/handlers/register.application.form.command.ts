import { ApplicationFormsRepository } from '@/blockchains/applicationForms/infrasturcture/application.forms.repository';
import { APPLICATION_PROCESS_STATUS } from '@/blockchains/applicationForms/infrasturcture/entities/enums';
import { RootApplicationForm } from '@/blockchains/applicationForms/infrasturcture/models/root.application.form.model';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



export class RegisterApplicationFormImplement {
  
  constructor(
    public readonly applicationFormId: string,
    public readonly processStatus: APPLICATION_PROCESS_STATUS,
  ) {
  }
}


@CommandHandler( RegisterApplicationFormImplement )
export class RegisterApplicationFormHandler
  implements ICommandHandler<RegisterApplicationFormImplement> {
  
  constructor(
    private repository: ApplicationFormsRepository,
    private publisher: EventPublisher,
  ) {
  }
  
  
  async execute( command: RegisterApplicationFormImplement ): Promise<any> {
    const { applicationFormId, processStatus } = command;
    // const applicationForm: ApplicationForm =
    //   await this.repository.findApplicationFormById(applicationFormId)
    
    const rootApplicationFormModel = this.publisher.mergeClassContext( RootApplicationForm );
    const rootApplicationForm = new rootApplicationFormModel( applicationFormId );
    
    await rootApplicationForm.getRootApplicationForm(processStatus);
  }
}