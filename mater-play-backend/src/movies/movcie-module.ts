import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "./movie-controller";
import { MovieService } from "./movie-services";
import { Module } from "@nestjs/common";
import { Movie } from "./movie-entity";
import { Category } from "src/categories/category-entity";


@Module({
    imports: [TypeOrmModule.forFeature([Movie, Category])],
    controllers: [MovieController],
    providers: [MovieService],
})
export class MovieModule  {}
