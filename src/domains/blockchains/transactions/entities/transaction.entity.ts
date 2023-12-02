import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity }                           from "../../../../libs/database/orm/typeorm/base/base.entity";
import { FunctionSignature }        from "../../contracts/entities/function-signature.entity";



@Entity({ name: 'transaction' })
export class Transaction extends BaseEntity {
    @Column()
    txHash: string
    
    @Column()
    block_number: number
    
    @Column()
    from_address: string
    
    @Column()
    to_address: string
    
    @Column()
    is_fee_delegation: boolean
    
    @Column()
    reward: string
    
    @Column({ type: "timestamp" })
    txTimestamp: Date
    
    @Column()
    function_signature_id: number
    
    @OneToOne(() => FunctionSignature)
    @JoinColumn({ name: 'function_signature_id' })
    function_signature: FunctionSignature
}
