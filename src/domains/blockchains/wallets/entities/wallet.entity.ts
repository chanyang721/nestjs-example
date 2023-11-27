import { Column, Entity, Index, Unique } from "typeorm";
import { BaseEntity }                    from "../../../../libs/database/orm/typeorm/base/base.entity";



@Entity( { name: "wallet" } )
export class WalletEntity extends BaseEntity {
    
    @Column( { length: 66 } )
    address: string;
    
    @Column()
    @Index()
    user_id: string;
}
