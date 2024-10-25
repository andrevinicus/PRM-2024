import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 60})
    name: string;

    @Column({nullable: false, default: true})
    active: boolean;
}
