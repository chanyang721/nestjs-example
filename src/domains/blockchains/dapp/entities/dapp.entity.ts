import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../libs/database/orm/typeorm/base/base.entity";


@Entity( { name: "dapp" } )
export class Dapp extends BaseEntity {
    /*
     * Columns
     * */
    @Column( { length: 60, comment: "dapp 이름" } )
    name: string;
    
    @Column( { length: 255, comment: "dapp service url" } )
    url: string;
    
    @Column( { length: 200, comment: "dapp logo image url" } )
    logo: string;
    
    @Column( { length: 1000, comment: "dapp 설명" } )
    description: string;
    
    @Column( { length: 200, comment: "리워드 수령 주소" } )
    claim_address: string;

    @Column({ length: 15, comment: 'dapp 인증 코드, ex) boxer-00001' })
    verification_code: string;
    
    /*
     * Index Columns
     * */
    
    
    /*
     * Relations
     * */
    
}

