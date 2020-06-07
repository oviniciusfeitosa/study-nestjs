import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsController } from './cats.controller';

@Module({
  providers: [CatsResolver],
  controllers: [CatsController],
})
export class CatsModule {}
