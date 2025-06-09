import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { GraphQLBoolean } from 'graphql';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  getAllProducts() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  addProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input);
  }

  @Mutation(() => GraphQLBoolean)
  async deleteProduct(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.productService.delete(id);
  }

  @Mutation(() => Product, { nullable: true })
updateProduct(@Args('input') input: UpdateProductInput) {
  return this.productService.update(input);
}
}
