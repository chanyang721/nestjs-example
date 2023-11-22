import { Column, Entity, Index, JoinColumn, OneToOne, Unique } from "typeorm";
import { BaseEntity }                                          from "../../../../libs/database/orm/typeorm/base/base.entity";
import { UserEntity }                   from "../../../users/infrastructure/entities/user.entity";



@Entity( { name: "wallet" } )
@Unique([ 'user_id' ])
export class WalletEntity extends BaseEntity {
    
    @Column({ length: 66 })
    address: string
    
    @Column()
    @Index()
    user_id: string
}
