import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { Feedback } from './feedback/feedback.entity';

import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'feedback_database',
      entities: [User, Product, Feedback],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Product, Feedback]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
    ProductModule,
    FeedbackModule,
  ],
})
export class AppModule {}
