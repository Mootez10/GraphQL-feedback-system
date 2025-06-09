import { Module } from '@nestjs/common';
import { FeedbackResolver } from './feedback.resolver';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  providers: [FeedbackService, FeedbackResolver],
  exports: [FeedbackService],
})

export class FeedbackModule {}
