import { Injectable } from '@nestjs/common';
import { Feedback } from './feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';

@Injectable()
export class FeedbackService {
  private feedbacks: Feedback[] = [];
  private idCounter = 1;

  create(input: CreateFeedbackInput): Feedback {
    const newFeedback = { id: this.idCounter++, ...input };
    this.feedbacks.push(newFeedback);
    return newFeedback;
  }

  findAll(): Feedback[] {
    return this.feedbacks;
  }

  delete(id: number): boolean {
  const index = this.feedbacks.findIndex(f => f.id === id);
  if (index === -1) return false;
  this.feedbacks.splice(index, 1);
  return true;
}
}
