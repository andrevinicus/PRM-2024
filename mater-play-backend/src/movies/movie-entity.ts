import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import { Category } from "../categories/category-entity";
import { Genero } from "src/genero/genero-entity";
@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({nullable: false})
  title: string;

  @Column({type: 'text', nullable: false})
  description: string;

  @Column({name:'age-rating', length: 2, nullable: false})
  ageRating: string;

  @Column({nullable: false})
  poster: string;

  @ManyToMany(() => Category, {eager: true})
  @JoinTable({
    name: 'movie_category',
  })
  categories: Category[];
  
  @ManyToMany(() => Genero, {eager: true})
  @JoinTable({
    name: 'movie_genero',
  })
  generos: Genero[];
}