import { Entity }     from "typeorm";
import { BaseEntity } from "../../../../libs/database/base/typeorm/base.entity";



@Entity({ name: 'file' })
export class FileEntity extends BaseEntity {

}
