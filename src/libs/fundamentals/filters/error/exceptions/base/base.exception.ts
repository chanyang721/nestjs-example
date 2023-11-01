import { HttpException }  from "@nestjs/common";
import { IBaseException } from "../interfaces/global.error.execption";



export class BaseException extends HttpException implements IBaseException {
    constructor( errorCode: string, statusCode: number ) {
        super( errorCode, statusCode );
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
    
    
    errorCode: string;
    statusCode: number;
    exceptionCode: string;
    method: string;
    path: string;
    message: string;
    timestamp?: string;
}


// export interface IBaseException {
//     statusCode: number;
//     errorCode: number;
//     method: string;
//     path: string;
//     message: string;
//     timestamp?: string;
//     errors?: any;
// }