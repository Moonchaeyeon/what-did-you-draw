import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Painting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    image: string;

    @Column()
    createdAt: string;
}