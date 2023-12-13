import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity }                                             from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Transaction }                                            from "../../transactions/entities/transaction.entity";
import { ContractToFunctionSignature }                            from "./contract-to-function-signature.entity";
import { ContractTypeEnum }                                       from "./enums";
import { Token }                                                  from "./token.entity";



@Entity( { name: "contract" } )
export class Contract extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 20, comment: "이름" } )
    name: string;
    
    @Column( { default: false, comment: "검증 여부" } )
    is_verified: boolean;
    
    @Column( { default: true, comment: "활성화 상태" } )
    is_active: boolean;
    
    /*
     * Index Columns
     * */
    @Column( { length: 66, unique: true, comment: "주소" } )
    address: string;
    
    @Column( {
        type   : "enum",
        enum   : ContractTypeEnum,
        default: ContractTypeEnum.ADDRESS_CONTRACT
    } )
    @Index()
    type: ContractTypeEnum;
    
    /*
     * FK Columns
     * */
    @Column( { type: "uuid", comment: "token contract tracker fk" } )
    tracker: string;
    
    
    /*
     * Relations
     * */
    @OneToOne( () => Token, { eager: true } )
    @JoinColumn( { name: "tracker" } )
    token: Token;
    
    @OneToMany(
      () => ContractToFunctionSignature,
      contractToFunctionSignature => contractToFunctionSignature.contract )
    contract_to_function_signatures: ContractToFunctionSignature[];
    
    @OneToMany( () => Transaction, transaction => transaction.contract )
    transactions: Transaction[];
    
}
