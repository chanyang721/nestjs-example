import { IsBoolean, IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";
import { Column, Entity, OneToMany }                                     from "typeorm";
import { BaseEntity }                                                    from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Contract }                                                      from "../../contracts/entities/contract.entity";


@Entity( { name: "dapp" } )
export class Dapp extends BaseEntity {
    /*
     * Columns
     * */
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(60)
    @Column( { length: 60, comment: "dapp 이름" } )
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    @Column( { length: 255, comment: "dapp service url" } )
    url: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(200)
    @Column( { length: 200, comment: "dapp logo image url" } )
    logo: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(1000)
    @Column( { length: 1000, comment: "dapp 설명" } )
    description: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(200)
    @Column( { length: 200, comment: "리워드 수령 주소" } )
    claim_address: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(5)
    @Column({ length: 5, nullable: true, comment: 'dapp 인증 코드, ex) 00001' })
    verification_code: string;
    
    @IsBoolean()
    @IsNotEmpty()
    @Column( { default: false, comment: "검증 여부" } )
    is_verified: boolean;
    
    /*
     * Relations
     * */
    @OneToMany(() => Contract, contract => contract.dapp)
    contracts: Contract[]
}