import { ApproveApplicationFormCommandImplement } from '@/blockchains/applicationForms/application/commands/handlers/approve.application.form.command';
import { FindRootApplicationFormEvent } from '@/blockchains/applicationForms/application/events/handlers/find.root.application.form.event';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { delay, map, Observable } from 'rxjs';

@Injectable()
export class ApplicationFormSagas {
  private statusMap = new Map();

  constructor() {
    this.statusMap = this.statusMap.set('status key', 'status value');
  }

  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(FindRootApplicationFormEvent),
      delay(1000),
      map(
        (event) =>
          new ApproveApplicationFormCommandImplement(
            event.applicationFormId,
            this.statusMap.get('status key'),
          ),
      ),
    );
  };
}
