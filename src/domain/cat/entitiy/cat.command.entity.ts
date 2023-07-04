import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: "cat" })
export class CatCommandEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: String,
        length: 20,
        nullable: false
    })
    name: string;

    @Column({
        type: Number,
        nullable: false,
        default: 0
    })
    age: number;

    @Column({
        type: Boolean,
        nullable: false,
        default: true
    })
    breed: Boolean;
}
