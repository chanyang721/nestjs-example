import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity }                                      from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                                        from "../../contracts/entities/contract.entity";
import { FunctionSignature }                               from "../../contracts/entities/function-signature.entity";
import { Wallet }                                          from "../../wallets/entities/wallet.entity";



@Entity( { name: "transaction" } )
export class Transaction extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 66, comment: "transaction hash" } )
    txHash: string;
    
    @Column( { comment: "block 넘버링" } )
    block_number: number;
    
    @Column( { length: 66, comment: "user address" } )
    from_address: string;
    
    @Column( { length: 66, comment: "contract address" } )
    to_address: string;
    
    @Column( { comment: "위임 수수료 존재 여부" } )
    is_fee_delegation: boolean;
    
    @Column( { type: "decimal", precision: 24, scale: 6 } )
    reward: number;
    
    @Column( { type: "timestamp" } )
    tx_timestamp: Date;
    
    @Column()
    function_signature_id: string;
    
    @Column()
    contract_id: string;
    
    @Column()
    token_id: string;
    
    /*
     * Relations
     * */
    @OneToOne( () => FunctionSignature )
    @JoinColumn( { name: "function_signature_id" } )
    function_signature: FunctionSignature;
    
    @ManyToOne( () => Contract, contract => contract.transactions)
    @JoinColumn( { name: "contract_id" } )
    contract: Contract;
    
    @ManyToOne( () => Wallet, wallet => wallet.transactions)
    @JoinColumn( { name: "token_id" } )
    wallet: Wallet;
}
