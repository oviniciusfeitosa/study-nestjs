import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver],
  controllers: [CatsController],
})
export class CatsModule {}
