// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(input: CreateUserInput): Promise<User> {
    const user = this.userRepo.create(input);
    return this.userRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async update(input: UpdateUserInput): Promise<User | null> {
    const user = await this.userRepo.findOneBy({ id: input.id });
    if (!user) return null;
    Object.assign(user, input);
    return this.userRepo.save(user);
  }

  async delete(id: number): Promise<boolean> {
  const result: DeleteResult = await this.userRepo.delete(id);
  return (result.affected ?? 0) > 0;
}
}
