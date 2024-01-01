import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity }               from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Reward }                   from "./reward.entity";



@Entity( { name: "reward_policy" } )
export class RewardPolicy extends BaseEntity {
    
    @Column( { type: "json" } )
    policy: object;
    
    @Column({ default: false, comment: '활설화 여부' })
    is_active: boolean
    
    @OneToOne( () => Reward )
    reward: Reward;
}