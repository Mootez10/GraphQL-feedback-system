import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateFeedbackInput {
  @Field()
  productName: string;

  @Field(() => Int)
  rating: number;

  @Field()
  comment: string;

  @Field()
  user: string;
}
