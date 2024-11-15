import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('genero')
export class Genero {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 60})
    name: string;
}
