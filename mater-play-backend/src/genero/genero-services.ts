import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Genero } from "./genero-entity";

@Injectable()
export class GeneroService {
    constructor(
        @InjectRepository(Genero)
        private repository: Repository<Genero>
    ) {}

    findAll(): Promise<Genero[]> { 
        return this.repository.find({  });
    }

    findById(id: number): Promise<Genero> {  
        return this.repository.findOneBy({ id: id });
    }

    save(genero: Genero): Promise<Genero> {
        return this.repository.save(genero);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
