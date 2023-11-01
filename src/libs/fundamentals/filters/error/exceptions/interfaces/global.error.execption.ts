
export const GlobalErrorException = ( response: IBaseException ): IBaseExceptionFormat => ( {
    error: {
        statusCode   : response.statusCode,
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
    exceptionCode: string;
    method: string;
    path: string;
    message: string;
    timestamp?: string;
    errors?: any;
}