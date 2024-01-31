import { HttpStatus } from "@nestjs/common";
import { BaseException } from "./base.exception";



export enum UnCatchExceptionEnum {
    UnCatchException = "9999"
}


export class UnCatchException extends BaseException {
    constructor() {
        super( UnCatchExceptionEnum.UnCatchException, HttpStatus.INTERNAL_SERVER_ERROR );
    }
}
