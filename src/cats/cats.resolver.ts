import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Cats')
export class CatsResolver {
  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
