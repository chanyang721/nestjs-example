import { IsDateString, IsOptional, IsUUID }                                                                    from "class-validator";
import { BaseEntity as TypeOrmBaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



export abstract class BaseEntity extends TypeOrmBaseEntity {
    
    @IsUUID()
    @IsOptional()
    @PrimaryGeneratedColumn( "uuid" )
    id: string;
    
    @IsDateString()
    @IsOptional()
    @CreateDateColumn( { type: "timestamp" } )
    created_at: Date;
    
    @IsDateString()
    @IsOptional()
    @UpdateDateColumn( { type: "timestamp" } )
    updated_at: Date;
    
    // @Column( {
    //     type    : "boolean",
    //     length  : 27,
    //     nullable: false,
    //     default : false,
    //     comment : "데이터 삭제 정보"
    // } )
    // is_deleted: boolean;
}
