import { Entity }     from "typeorm";
import { BaseEntity } from "../../../../libs/database/base/typeorm/base.entity";



@Entity({ name: 'group' })
export class GroupEntity extends BaseEntity {

}
