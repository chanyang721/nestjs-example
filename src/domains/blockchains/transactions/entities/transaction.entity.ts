import { Entity } from "typeorm";
import { BaseEntity } from "../../../../libs/database/orm/typeorm/base/base.entity";



@Entity({ name: 'transaction' })
export class Transaction extends BaseEntity {


}
