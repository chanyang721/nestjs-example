import { HttpStatus }    from "@nestjs/common";
import { BaseException } from "../base/base.exception";

export enum AuthErrorCodeEnum {
    EmailNotFound = "0001",
    NotAuthenticated = "0002",
    EmailExists = "0003",
    JwtInvalidToken = "0004",
    JwtUserNotFound = "0005",
    JwtExpired = "0006",
    JwtInvalidSignature = "0007",
    UserNotFound = "0008",
}

export class AuthEmailNotFoundException extends BaseException {
    constructor() {
        super( AuthErrorCodeEnum.EmailNotFound, HttpStatus.NOT_FOUND );
    }
}