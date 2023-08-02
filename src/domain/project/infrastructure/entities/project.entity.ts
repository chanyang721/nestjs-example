import { Entity }     from "typeorm";
import { BaseEntity } from "../../../../libs/database/base/typeorm/base.entity";



@Entity({ name: 'project' })
export class ProjectEntity extends BaseEntity {

}
