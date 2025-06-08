import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLBoolean } from 'graphql';

@ObjectType()
class FeedbackType {
  @Field(() => Int)
  id: number;

  @Field()
  productName: string;

  @Field(() => Int)
  rating: number;

  @Field()
  comment: string;

  @Field()
  user: string;
}

@Resolver(() => FeedbackType)
export class FeedbackResolver {
  constructor(private feedbackService: FeedbackService) {}

  @Query(() => [FeedbackType])
  getAllFeedbacks() {
    return this.feedbackService.findAll();
  }

  @Mutation(() => FeedbackType)
  addFeedback(@Args('input') input: CreateFeedbackInput) {
    return this.feedbackService.create(input);
  }

  @Mutation(() => GraphQLBoolean)
deleteFeedback(@Args('id', { type: () => Int }) id: number): boolean {
  return this.feedbackService.delete(id);
}
}
