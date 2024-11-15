import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Genero } from "./genero-entity";
import { GeneroService } from "./genero-services";

@Controller('genero')
export class GeneroController {

    constructor(private service: GeneroService) {} 
    
    @Get()
    findAll(): Promise<Genero[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Genero> { 
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException("Genero not found", HttpStatus.NOT_FOUND);
        }
        return found;
    }

    @Post()
    create(@Body() genero: Genero): Promise<Genero> {
        return this.service.save(genero);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() genero: Genero): Promise<Genero> { 
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException("Genero not found", HttpStatus.NOT_FOUND);
        }

        genero.id = found.id;

        return this.service.save(genero);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> { 
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException("Genero not found", HttpStatus.NOT_FOUND);
        }

        await this.service.remove(id);
    }
}
