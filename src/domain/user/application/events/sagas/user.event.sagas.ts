import { Injectable }             from "@nestjs/common";
import { ofType, Saga }           from "@nestjs/cqrs";
import { map, Observable }        from "rxjs";




@Injectable()
export class UserSagas {
  @Saga()
  dragonKilled = ( events$: Observable<any> ): Observable<void> => {
    return events$.pipe(
      ofType(),
      map(( event ) => {

      }));
  };
}
