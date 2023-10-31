import { PickType }         from "@nestjs/swagger";
import { ProjectEntityDto } from "./project.entity.dto";



export class CreateProjectDto extends PickType( ProjectEntityDto, [ "name" ] ) {

}
