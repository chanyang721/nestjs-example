import { PartialType }     from "@nestjs/swagger";
import { ApplicationForm } from "../entities/application.form.entity";



export class RegisterApplicationFormDto extends PartialType( ApplicationForm ) {

}