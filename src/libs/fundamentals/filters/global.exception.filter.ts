import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger,
    UnprocessableEntityException,
    ValidationError
} from "@nestjs/common";
import type { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { TypeORMError } from "typeorm";
import { AxiosFetchFailedException } from "./error/exceptions/axios/axios.exception";
import { BaseException } from "./error/exceptions/base/base.exception";
import { UnCatchException } from "./error/exceptions/base/uncatch.exception";
import { GlobalErrorException } from "./error/exceptions/interfaces/global.error.execption";



@Catch()
export class GlobalExceptionFilter<T = BaseException | HttpException | Error> implements ExceptionFilter {
    private readonly logger = new Logger( GlobalExceptionFilter.name );
    
    
    catch( exception: T, host: ArgumentsHost ): any {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const stack = ( exception as Error ).stack;
        
        const res = exception instanceof BaseException ? exception : new UnCatchException();
        
        /**
         * Default Error Exception Setting
         */
          // @ts-ignore
        let message: string = exception.message || exception.response.message || exception.response.error || exception.response,
          exceptionCode: string = exception.constructor.name,
          httpStatus: number = HttpStatus.INTERNAL_SERVER_ERROR,
          errors: any;
        console.log( exception );
        
        /**
         * Validation Error Exception Filter
         * */
        if ( exception instanceof UnprocessableEntityException ) {
            httpStatus = ( exception as UnprocessableEntityException ).getStatus(); // 422
            exceptionCode = exception.constructor.name;
            message = ( exception as UnprocessableEntityException ).message;
            const error = exception.getResponse() as { message: ValidationError[] };
            
            const validationErrorsMessage = error.message;
            errors = this.setValidationErrorMessages( validationErrorsMessage );
        }
        
        /**
         * Axios Exception Filter
         * TODO: Axios Exception Filter 전용 Exception 생성
         */
        else if ( exception instanceof AxiosFetchFailedException ) {
            httpStatus = ( exception as AxiosFetchFailedException ).getStatus();
            exceptionCode = ( exception as AxiosFetchFailedException ).name;
            message = ( exception as AxiosFetchFailedException ).message;
        }
        
        
        /**
         * Http Exception Filter
         * */
        else if ( exception instanceof HttpException ) {
            httpStatus = ( exception as HttpException ).getStatus();
            exceptionCode = ( exception as HttpException ).name;
            message = ( exception as HttpException ).message;
        }
        
        
        /**
         * TypeORM Error Exception Filter
         */
        if ( ( exception instanceof TypeORMError ) ) {
            httpStatus = HttpStatus.UNPROCESSABLE_ENTITY; // 422
            exceptionCode = ( exception as TypeORMError ).name;
            message = ( exception as TypeORMError ).message;
        }
        
        
        /**
         * Mongoose Error Exception Filter
         */
        if ( ( exception instanceof MongooseError ) ) {
            httpStatus = HttpStatus.UNPROCESSABLE_ENTITY; // 422
            exceptionCode = ( exception as MongooseError ).name;
            message = ( exception as MongooseError ).message;
        }
        
        const exceptionResponseBody = GlobalErrorException( { httpStatus, exceptionCode, message, method: request.method, path: request.url, errors } );
        this.logger.error( exceptionResponseBody );
        
        response.status( httpStatus )
                .json( exceptionResponseBody );
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
