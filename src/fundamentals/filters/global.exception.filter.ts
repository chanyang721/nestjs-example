import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger, UnprocessableEntityException, ValidationError } from "@nestjs/common";
import type { Request, Response }                                                                                                  from "express";
import { GlobalResponseError }                                                                                                     from "./global.response.error";



@Catch()
export class GlobalExceptionFilter<T = any> implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);


  catch( exception: T, host: ArgumentsHost ): any {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    let exceptionCode: string, message: string, statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR, errors: any;

    /**
     * Validation Error Exception Filter
     * */
    if ( exception instanceof UnprocessableEntityException ) {
      statusCode = ( exception as UnprocessableEntityException ).getStatus();
      exceptionCode = exception.constructor.name;
      message = ( exception as UnprocessableEntityException ).message;
      const error = exception.getResponse() as { message: ValidationError[] };

      const validationErrorsMessage = error.message;
      errors = this.setValidationErrorMessages(validationErrorsMessage);
    }

    /**
     * Http Exception Filter
     * */
    else if ( exception instanceof HttpException ) {
      this.logger.log(exception);
      statusCode = ( exception as HttpException ).getStatus();
      exceptionCode = ( exception as HttpException ).name;
      message = ( exception as HttpException ).message;
    }

    response.status(statusCode)
            .json(GlobalResponseError({
              statusCode,
              exceptionCode,
              message,
              method: request.method,
              path  : request.url,
              errors
            }));
  }


  private setValidationErrorMessages( validationErrors: ValidationError[] ): any {
    /**
     * {
     *     error: {
     *          statusCode: 422,
     *          exceptionCode: 'UnprocessableEntityException',
     *          message: 'Validation failed',
     *          path: '/api/v1/users',
     *          method: 'POST',
     *          errors: []
     *     }
     * }
     * */
    return;
  }
}