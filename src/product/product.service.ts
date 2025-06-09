// src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { DeleteResult } from 'typeorm';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  create(input: CreateProductInput): Promise<Product> {
    const product = this.productRepo.create(input);
    return this.productRepo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async update(input: UpdateProductInput): Promise<Product | null> {
    const product = await this.productRepo.findOneBy({ id: input.id });
    if (!product) return null;
    Object.assign(product, input);
    return this.productRepo.save(product);
  }

  async delete(id: number): Promise<boolean> {
  const result: DeleteResult = await this.productRepo.delete(id);
  return (result.affected ?? 0) > 0;
}
}
