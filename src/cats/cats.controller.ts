import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

   @Post()
    async create(@Body() createCatDTO: CreateCatDto) {
        this.catsService.create(createCatDTO);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

   
}
