import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats.schemas';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver, CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
