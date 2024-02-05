import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';



export class RegisterApplicationFromCommendDto {

}


export class RegisterApplicationFormImplement {
  
  constructor(
    private registerApplicationFromCommendDto: RegisterApplicationFromCommendDto,
  ) {
  }
}


@CommandHandler( RegisterApplicationFormImplement )
export class RegisterApplicationFormHandler implements ICommandHandler<RegisterApplicationFormImplement> {
  
  constructor(
  
  ) {
  }

  
  async execute( command: RegisterApplicationFormImplement ) {
  
  }
}