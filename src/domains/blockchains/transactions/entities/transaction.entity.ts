import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity }                           from "../../../../libs/database/orm/typeorm/base/base.entity";
import { FunctionSignature }        from "../../contracts/entities/function-signature.entity";



@Entity({ name: 'transaction' })
export class Transaction extends BaseEntity {
    @Column({ length: 66, comment: 'transaction hash' })
    txHash: string
    
    @Column({ comment: 'block 넘버링' })
    block_number: number
    
    @Column({ length: 66, comment: 'user address' })
    from_address: string
    
    @Column({ length: 66, comment: 'contract address' })
    to_address: string
    
    @Column({ comment: '위임 수수료 존재 여부' })
    is_fee_delegation: boolean
    
    @Column({ type: 'decimal', precision: 16, scale: 6 })
    reward: number
    
    @Column({ type: "timestamp" })
    txTimestamp: Date
    
    @Column()
    function_signature_id: number
    
    @OneToOne(() => FunctionSignature)
    @JoinColumn({ name: 'function_signature_id' })
    function_signature: FunctionSignature
}
