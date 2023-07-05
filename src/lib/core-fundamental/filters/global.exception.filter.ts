import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger, UnprocessableEntityException, ValidationError } from "@nestjs/common";
import type { Request, Response } from "express";
import { TypeORMError }           from "typeorm";
import { MongooseError }               from "mongoose";
import { GlobalResponseError }    from "./global.response.error";



@Catch()
export class GlobalExceptionFilter<T = HttpException | Error> implements ExceptionFilter {
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
      statusCode = ( exception as UnprocessableEntityException ).getStatus(); // 422
      exceptionCode = exception.constructor.name;
      message = ( exception as UnprocessableEntityException ).message;
      const error = exception.getResponse() as { message: ValidationError[] };

      const validationErrorsMessage = error.message;
      errors = this.setValidationErrorMessages(validationErrorsMessage);
    }

    /**
     * Axios Exception Filter
     */
    else if ( exception instanceof HttpException ) {
      statusCode = ( exception as HttpException ).getStatus();
      exceptionCode = ( exception as HttpException ).name;
      message = ( exception as HttpException ).message;
    }

    /**
     * Http Exception Filter
     * */
    else if ( exception instanceof HttpException ) {
      statusCode = ( exception as HttpException ).getStatus();
      exceptionCode = ( exception as HttpException ).name;
      message = ( exception as HttpException ).message;
    }

    /**
     * TypeORM Error Exception Filter
     */
    if ( ( exception instanceof TypeORMError ) ) {
      statusCode = HttpStatus.UNPROCESSABLE_ENTITY // 422
      exceptionCode = ( exception as TypeORMError ).name
      message = ( exception as TypeORMError ).message
    }

    /**
     *
     */
    if ( (exception instanceof MongooseError )) {
      statusCode = HttpStatus.UNPROCESSABLE_ENTITY // 422
      exceptionCode = ( exception as MongooseError ).name
      message = ( exception as MongooseError ).message
    }

    this.logger.error(GlobalResponseError({ statusCode, exceptionCode, message, method: request.method, path  : request.url, errors }))
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