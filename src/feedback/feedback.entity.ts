import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Feedback {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  productName: string;

  @Field(() => Int)
  @Column()
  rating: number;

  @Field()
  @Column()
  comment: string;

  @Field()
  @Column()
  user: string;
}
