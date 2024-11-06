import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/categories/category-entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>
    ) {}

    findAll(): Promise<Category[]> { 
        return this.repository.find({
            where: {
            },
        });
    }

    findById(id: number): Promise<Category> {  
        return this.repository.findOneBy({ id: id });
    }

    save(category: Category): Promise<Category> {
        return this.repository.save(category);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
