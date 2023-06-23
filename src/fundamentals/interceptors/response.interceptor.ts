import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common'
import { map, Observable }                                                    from 'rxjs'



@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    private readonly logger = new Logger(ResponseInterceptor.name);

    intercept( context: ExecutionContext, next: CallHandler ): Observable<any> {
        const response = context.switchToHttp()
                                .getResponse()

        return next.handle()
                   .pipe(map(( data ) => ( {
                       statusCode: response.statusCode,
                       data: data
                   } )))
    }
}