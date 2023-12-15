import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity }                                             from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                                               from "../../contracts/entities/contract.entity";
import { FunctionSignature }                                      from "../../contracts/entities/function-signature.entity";
import { Account }                                                from "../../wallets/entities/account.entity";



@Entity( { name: "transaction" } )
export class Transaction extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 66, comment: "transaction hash" } )
    hash: string;
    
    @Column( { comment: "위임 수수료 존재 여부" } )
    is_fee_delegation: boolean;
    
    @Column( { type: "decimal", precision: 24, scale: 6 } )
    reward: number;
    
    @Column( { length: 66, comment: "account address" } )
    from_address: string;
    
    @Column( { length: 66, comment: "contract address" } )
    to_address: string;
    
    /*
     * Index Columns
     * */
    @Column( { comment: "block 넘버링" } )
    @Index()
    block_number: number;
    
    @Column( { type: "timestamp" } )
    @Index()
    tx_timestamp: Date;
    
    /*
     * FK
     * */
    @Column( { length: 8, comment: "contract 의 function 별 signature ex) 74899a7p" } )
    func_signature: string;
    
    @Column( { type: "uuid" } )
    contract_id: string;
    
    @Column( { type: "uuid" } )
    account_id: string;
    
    /*
     * Relations
     * */
    @OneToOne( () => FunctionSignature, { eager: true } )
    @JoinColumn( { name: "func_signature", referencedColumnName: "signature" } )
    function_signature: FunctionSignature;
    
    @ManyToOne( () => Contract, contract => contract.transactions )
    @JoinColumn( { name: "contract_id" } )
    contract: Contract;
    
    @ManyToOne( () => Account, account => account.transactions )
    @JoinColumn( { name: "account_id" } )
    account: Account;
}
