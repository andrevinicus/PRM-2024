import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "./movie-controller";
import { MovieService } from "./movie-services";
import { Module } from "@nestjs/common";
import { Movie } from "./movie-entity";
import { Category } from "src/categories/category-entity";
import { Genero } from "src/genero/genero-entity";
import { SupabaseModule } from "src/@libs/subpasta/supabase.module";


@Module({
    imports: [TypeOrmModule.forFeature([Movie, Category, Genero]), SupabaseModule],
    controllers: [MovieController],
    providers: [MovieService],
})
export class MovieModule  {}
