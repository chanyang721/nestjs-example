import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: "cats" })
export class CatsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;
}
