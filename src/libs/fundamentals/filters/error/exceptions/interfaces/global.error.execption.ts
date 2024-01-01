
export const GlobalErrorException = ( response: IBaseException ): IBaseExceptionFormat => ( {
    error: {
        httpStatus   : response.httpStatus,
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
    httpStatus: number;
    exceptionCode: string;
    method: string;
    path: string;
    message: string;
    timestamp?: string;
    errors?: any;
}