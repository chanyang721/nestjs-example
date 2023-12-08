import { Column, Entity, Index, OneToMany, Unique } from "typeorm";
import { BaseEntity }                               from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Transaction }                              from "../../transactions/entities/transaction.entity";



@Entity( { name: "wallet" } )
export class Wallet extends BaseEntity {
    @Column( { length: 66, unique: true, comment: '유저 주소' } )
    @Index()
    address: string;
    
    @Column({ type: 'uuid' })
    @Index()
    user_id: string;
    
    @OneToMany(() => Transaction, transaction => transaction.to_address)
    transactions: Transaction[]
}
