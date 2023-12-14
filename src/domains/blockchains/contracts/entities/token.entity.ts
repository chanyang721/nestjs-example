import { Column, Entity }                          from "typeorm";
import { BaseEntity }                              from "../../../../libs/database/orm/typeorm/base/base.entity";
import { ContractStandardEnum, TokenContractType } from "./enums";



@Entity( { name: "token" } )
export class Token extends BaseEntity {
    @Column( {
        type   : "enum",
        enum   : TokenContractType,
        comment: "NFT or TOKEN"
    } )
    type: TokenContractType;
    
    @Column( {
        type   : "enum",
        enum   : ContractStandardEnum,
        default: ContractStandardEnum.ERC20,
        comment: "ERC-20 등"
    } )
    standard: ContractStandardEnum.ERC20;
}