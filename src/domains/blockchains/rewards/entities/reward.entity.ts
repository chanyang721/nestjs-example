import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../../../libs/database/orm/typeorm/base/base.entity";
import { RewardPolicy } from "./reward-policy.entity";



@Entity( { name: "reward" } )
export class Reward extends BaseEntity {
    
    @Column()
    policy_id: string;
    
    
    @OneToOne( () => RewardPolicy )
    @JoinColumn( { name: "policy_id" } )
    reward_policy: RewardPolicy;
}