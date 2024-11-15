import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { GeneroController } from "./genero-controller"
import { Genero } from "./genero-entity"
import { GeneroService } from "./genero-services"


@Module({
    imports: [TypeOrmModule.forFeature([Genero])],
    providers: [GeneroService],
    controllers: [GeneroController],
})
export class GeneroModule { }