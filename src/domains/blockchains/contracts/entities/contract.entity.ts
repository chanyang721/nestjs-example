import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity }                                                        from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Dapp }                                                              from "../../dapp/entities/dapp.entity";
import { Transaction }                                                       from "../../transactions/entities/transaction.entity";
import { CONTRACT_TYPE }                                                     from "./enums";
import { RelContractFunctionSignature }                                      from "./rel-contract-function_signature.entity";
import { Token }                                                             from "./token.entity";



@Entity( { name: "contract" } )
export class Contract extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 20, comment: "이름" } )
    name: string;
    
    @Column( { length: 500, comment: "깃허브 등 소스코드의 주소" } )
    source_code_url: string;
    
    @Column( { length: 66, comment: "컨트랙트 배포 주소" } )
    deploy_tx_hash: string;
    
    @Column( { length: 255, comment: "audit pdf 저장 url" } )
    audit_url: string;
    
    @Column( { default: true, comment: "활성화 상태" } )
    is_active: boolean;
    
    /*
     * Index Columns
     * */
    @Column( { length: 66, unique: true, comment: "컨트랙트 주소" } )
    address: string;
    
    @Column( {
        type   : "enum",
        enum   : CONTRACT_TYPE,
        default: CONTRACT_TYPE.ADDRESS_CONTRACT
    } )
    @Index()
    type: CONTRACT_TYPE;
    
    /*
     * FK Columns
     * */
    @Column( { type: "uuid", comment: "token contract tracker fk" } )
    tracker: string;
    
    @Column()
    dapp_id: string;
    
    
    /*
     * Relations
     * */
    /** OneToOne */
    @OneToOne( () => Token, { eager: true } )
    @JoinColumn( { name: "tracker" } )
    token: Token;
    
    /** OneToMany */
    @OneToMany(
      () => RelContractFunctionSignature,
      rel_contract_function_signature => rel_contract_function_signature.contract )
    rel_contract_function_signatures: RelContractFunctionSignature[];
    
    @OneToMany( () => Transaction, transaction => transaction.contract )
    transactions: Transaction[];
    
    /** ManyToOne */
    @ManyToOne( () => Dapp, dapp => dapp.contracts )
    @JoinColumn( { name: "dapp_id" } )
    dapp: Dapp;
}
