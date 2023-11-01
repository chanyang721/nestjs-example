
export const GlobalErrorException = ( response: IBaseException ): IBaseExceptionFormat => ( {
    error: {
        statusCode   : response.statusCode,
        errorCode    : response.errorCode,
        exceptionCode: response.exceptionCode,
        method       : response.method,
        path         : response.path,
        message      : response.message,
        timestamp    : new Date().toISOString(),
        errors       : response.errors
    }
} );


export interface IBaseExceptionFormat {
    error: IBaseException;
}


export interface IBaseException {
    statusCode: number;
    errorCode: string;
    exceptionCode: string;
    method: string;
    path: string;
    message: string;
    timestamp?: string;
    errors?: any;
}