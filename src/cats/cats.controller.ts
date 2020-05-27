import { Controller, Get, Req, Post, HttpCode, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        return 'This action adds a new cat';
    }

    @Get('ab*cd')
    findAll(@Req() request: Request): string {
        return 'This action returns all cats'
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
}
