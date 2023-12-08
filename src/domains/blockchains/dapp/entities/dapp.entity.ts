import { Column, Entity } from "typeorm";
import { BaseEntity }     from "../../../../libs/database/orm/typeorm/base/base.entity";



@Entity({ name: 'dapp' })
export class Dapp extends BaseEntity {
    @Column({ length: 60, comment: 'dapp 이름' })
    name: string;
    
    @Column({ length: 255 })
    url: string;
    
    @Column({ length: 200, comment: 'dapp logo image' })
    logo: string;
    
    @Column({ length: 200, comment: '리워드 수령 주소' })
    claim_address: string;
}
