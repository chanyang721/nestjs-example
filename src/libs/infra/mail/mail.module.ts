import { Module } from "@nestjs/common";
import { CommonConfigService } from "../../config/common.config.service";
import { MailService } from "./mail.srevice";



@Module( {
    imports  : [],
    providers: [ CommonConfigService, MailService ]
} )
export class MailModule {
}