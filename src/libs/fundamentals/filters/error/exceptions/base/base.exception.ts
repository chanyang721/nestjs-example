import { HttpException } from "@nestjs/common";
import { IBaseException } from "../interfaces/global.error.execption";



export class BaseException extends HttpException implements IBaseException {
    httpStatus: number;
    exceptionCode: string;
    method: string;
    path: string;
    message: string;
    timestamp?: string;
    
    
    constructor( exceptionCode: string, httpStatus: number ) {
        super( exceptionCode, httpStatus );
        
        this.exceptionCode = exceptionCode;
        this.httpStatus = httpStatus;
    }
}