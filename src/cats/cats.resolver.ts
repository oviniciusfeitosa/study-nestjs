import { Resolver, Query } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Resolver('Cats')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}
  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CreateCatDto])
  async cats() {
    return this.catsService.findAll();
  }
}
