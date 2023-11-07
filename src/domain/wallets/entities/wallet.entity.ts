import { Entity } from "typeorm";
import { BaseEntity } from "../../../libs/database/orm/typeorm/base/base.entity";



@Entity({ name: 'wallet' })
export class WalletEntity extends BaseEntity {

}
