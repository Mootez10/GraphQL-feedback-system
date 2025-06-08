import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { GraphQLBoolean } from 'graphql';
import { UpdateUserInput } from './dto/update-user.input';
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  getAllUsers() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  addUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Mutation(() => GraphQLBoolean)
  deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.delete(id);
  }
  @Mutation(() => User, { nullable: true })
updateUser(@Args('input') input: UpdateUserInput) {
  return this.userService.update(input);
}
}