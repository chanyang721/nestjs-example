import { Injectable }             from "@nestjs/common";
import { ofType, Saga }           from "@nestjs/cqrs";
import { map, Observable }        from "rxjs";




@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = ( events$: Observable<any> ): Observable<void> => {
    return events$.pipe(
      ofType(),
      // filter((event) => event instanceof HeroKilledDragonEvent),
      map(( event ) => {
        console.log("Inside [HeroesGameSagas] Saga");

      }));
  };
}
