import { Column, CreateDateColumn, Entity, Index } from "typeorm";
import { BaseEntity }                              from "../../../../libs/database/orm/typeorm/base/base.entity";



@Entity({ name: 'contract' })
export class Contract extends BaseEntity {
    
    @Column()
    name: string
    
    @Column({
        length: 66
    })
    address: string
    
    @Column()
    function_signature: 'json'
    
    @Column({
        length: 66
    })
    @Index()
    display_hash: string
    
    @Column()
    enabled: boolean
    
    @CreateDateColumn( { type: "timestamp" } )
    @Index()
    created_at: Date;
}
