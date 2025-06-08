import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(input: CreateUserInput): User {
    const newUser = { id: this.idCounter++, ...input };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
  update(input: UpdateUserInput): User | null {
  const user = this.users.find(u => u.id === input.id);
  if (!user) return null;
  Object.assign(user, input);
  return user;
}
}