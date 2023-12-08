import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity }                            from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                              from "./contract.entity";
import { Token }                                 from "./token.entity";



@Entity( { name: "contract-to-token" } )
export class ContractToToken extends BaseEntity {
    @Column( { type: "uuid" } )
    contract_id: string;
    
    @Column( { type: "uuid" } )
    token_id: string;
    
    @ManyToOne( () => Contract, contract => contract.contract_to_tokens, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    } )
    @JoinColumn( { name: "contract_id" } )
    contract: Contract;
    
    @ManyToOne( () => Token, token => token.contract_to_tokens, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    } )
    @JoinColumn( { name: "token_id" } )
    token: Token;
}
