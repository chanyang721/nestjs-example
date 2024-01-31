import { HttpStatus } from "@nestjs/common";
import { BaseException } from "../base/base.exception";



export enum APPLICATION_EXCEPTION {
    /* 10000 번 대 에러 */
    APPLICATION_NOT_VERIFIED = "10001"
}


export class ApplicationNotFoundException extends BaseException {
    constructor() {
        super( APPLICATION_EXCEPTION.APPLICATION_NOT_VERIFIED, HttpStatus.UNAUTHORIZED );
    }
}