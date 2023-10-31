import { Injectable }      from "@nestjs/common";
import { ofType, Saga }    from "@nestjs/cqrs";
import { map, Observable } from "rxjs";



@Injectable()
export class UserSagas {
    @Saga()
    updateUser = ( events$: Observable<any> ): Observable<void> => {
        return events$.pipe(
          ofType(),
          map( ( event ) => {
          
          } ) );
    };
    
    // @Saga()
    // deleteUser = ( events$: Observable<any> ): Observable<void> => {
    //   return events$.pipe(
    //     ofType(),
    //     map(( event ) => {
    //
    //     }));
    // }
}
