import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Dapp }                                 from "./dapp.entity";



@Entity( { name: "dapp_application" } )
export class DappApplication extends Dapp {
    
    
    
    @Column({ nullable: true, comment: '검수 완료되어 dapp 테이블에 저장되면 update' })
    dapp_id: number
    
    @OneToOne(() => Dapp, { nullable: true })
    @JoinColumn({ name: 'dapp_id' })
    dapp: Dapp
}