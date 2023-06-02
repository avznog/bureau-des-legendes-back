import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post("multiple")
  createMultiple(@Body() createQuestionsService: CreateQuestionDto[]) {
    return this.questionsService.createMultiple(createQuestionsService);
  }
}
