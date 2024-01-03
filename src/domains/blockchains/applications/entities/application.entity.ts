import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity }                                       from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                                         from "../../contracts/entities/contract.entity";
import { Dapp }                                             from "../../dapp/entities/dapp.entity";
import { Account }                                          from "../../wallets/entities/account.entity";
import { APPLICATION_PROCESS_STATUS }                       from "./enums";



@Entity( { name: "application" } )
export class Application extends BaseEntity {
    /*
     * Columns
     * */
    @Column( {
        type   : "enum",
        enum   : APPLICATION_PROCESS_STATUS,
        default: APPLICATION_PROCESS_STATUS.APPLY,
        comment: "신청서 진행 상태"
    } )
    process_status: APPLICATION_PROCESS_STATUS;
    
    @Column( { length: 5, unique: true, comment: "신청서 번호, ex) 00001" } )
    application_number: string;
    
    // @Column( { comment: "약관 동의 여부" } )
    // terms_agreement: boolean;
    
    
    /*
     * FK Columns
     * */
    @Column()
    dappId: number;
    
    @Column()
    accountId: number;
    
    /*
     * Relations
     * */
    @OneToMany( () => Contract, contract => contract.application )
    contracts: Contract[];
    
    @ManyToOne( () => Dapp )
    @JoinColumn( { name: "dappId" } )
    dapp: Dapp;
    
    @ManyToOne( () => Account )
    @JoinColumn( { name: "accountId" } )
    account: Account;
}