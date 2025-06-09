// src/feedback/feedback.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { DeleteResult } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepo: Repository<Feedback>,
  ) {}

  create(input: CreateFeedbackInput): Promise<Feedback> {
    const feedback = this.feedbackRepo.create(input);
    return this.feedbackRepo.save(feedback);
  }

  findAll(): Promise<Feedback[]> {
    return this.feedbackRepo.find();
  }

  async delete(id: number): Promise<boolean> {
  const result: DeleteResult = await this.feedbackRepo.delete(id);
  return (result.affected ?? 0) > 0;
}
}
