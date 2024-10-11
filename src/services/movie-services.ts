import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "../entities/movie-entity";
import { Injectable } from "@nestjs/common";

Injectable()
export class MovieService {

    constructor(
        @InjectRepository(Movie)
        private repository: Repository<Movie>
    ){}

    findALl(): Promise<Movie[]> { 
        return this.repository.find();
    }
    findById(id: string): Promise<Movie> {  
        return this.repository.findOneBy({id : id});
    }
}