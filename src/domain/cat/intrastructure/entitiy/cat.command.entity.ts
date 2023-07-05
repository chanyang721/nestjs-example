import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../lib/database/base/typeorm/base.entity";



@Entity({ name: "cat" })
export class CatEntity extends BaseEntity {
  @Column({
    type    : String,
    length  : 20,
    nullable: false
  }) name: string;

  @Column({
    type    : Number,
    nullable: false,
    default : 0
  }) age: number;

  @Column({
    type    : Boolean,
    nullable: false,
    default : true
  }) breed: Boolean;
}
