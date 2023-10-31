import { HttpException }  from "@nestjs/common";
import { IBaseException } from "../interfaces/global.error.execption";



export class BaseException extends HttpException implements IBaseException {
    constructor( exceptionCode: string, statusCode: number ) {
        
        super( exceptionCode, statusCode );
        
        this.exceptionCode = exceptionCode;
        this.statusCode = statusCode;
    }
    
    
    statusCode: number;
    exceptionCode: string;
    method: string;
    path: string;
    message: string;
    timestamp?: string;
}