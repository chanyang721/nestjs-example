import { HttpStatus } from "@nestjs/common";
import { BaseException } from "../base/base.exception";



export enum AxiosErrorCodeEnum {
    FetchFailed = "0001"
}


export class AxiosFetchFailedException extends BaseException {
    constructor() {
        super( AxiosErrorCodeEnum.FetchFailed, HttpStatus.NOT_FOUND );
    }
}