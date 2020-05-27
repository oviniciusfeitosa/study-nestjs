import { Controller, Get, Req, Post, HttpCode, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        console.log(createCatDto);
        return `This action adds a new cat : { ${createCatDto.age}, ${createCatDto.name}, ${createCatDto.breed} }`;
    }

    @Get()
    findAll(@Query() query: ListAllEntities): string {
        return 'This action returns all cats'
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action update a #${id} cat`
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
