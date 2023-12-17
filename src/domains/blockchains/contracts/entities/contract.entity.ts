import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity }                                             from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Transaction }                                            from "../../transactions/entities/transaction.entity";
import { ContractTypeEnum }                                       from "./enums";
import { RelContractFunctionSignature }                           from "./rel-contract-function_signature.entity";
import { Token }                                                  from "./token.entity";



@Entity( { name: "contract" } )
export class Contract extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 20, comment: "이름" } )
    name: string;
    
    @Column({ length: 500, comment: '깃허브 등 소스코드의 주소' })
    source_code_url: string
    
    @Column({ length: 66, comment: '컨트랙트 배포 주소' })
    deploy_hash: string
    
    @Column( { default: false, comment: "검증 여부" } )
    is_verified: boolean;
    
    @Column( { default: true, comment: "활성화 상태" } )
    is_active: boolean;
    
    /*
     * Index Columns
     * */
    @Column( { length: 66, unique: true, comment: "컨트랙트 주소" } )
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
      () => RelContractFunctionSignature,
      rel_contract_function_signature => rel_contract_function_signature.contract )
    rel_contract_function_signatures: RelContractFunctionSignature[];
    
    @OneToMany( () => Transaction, transaction => transaction.contract )
    transactions: Transaction[];
}
