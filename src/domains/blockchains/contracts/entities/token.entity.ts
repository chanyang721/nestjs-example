import { Column, Entity }                         from "typeorm";
import { BaseEntity }                             from "../../../../libs/database/orm/typeorm/base/base.entity";
import { CONTRACT_STANDARD, TOKEN_CONTRACT_TYPE } from "./enums";



@Entity( { name: "token" } )
export class Token extends BaseEntity {
    @Column( {
        type   : "enum",
        enum   : TOKEN_CONTRACT_TYPE,
        comment: "NFT or TOKEN"
    } )
    type: TOKEN_CONTRACT_TYPE;
    
    @Column( {
        type   : "enum",
        enum   : CONTRACT_STANDARD,
        default: CONTRACT_STANDARD.ERC_20,
        comment: "ERC_20 등"
    } )
    standard: CONTRACT_STANDARD.ERC_20;
}