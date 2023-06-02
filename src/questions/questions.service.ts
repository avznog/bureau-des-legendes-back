import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {

  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>
  ) {}

  createMultiple(createQuestionsService: CreateQuestionDto[]) {
    try {
      createQuestionsService.forEach(async createQuestionService => {
        await this.questionRepository.save({
          ...createQuestionService,
          form: {
            id: createQuestionService.form.id
          },
        })
      });
      return true;
    } catch (error) {
      console.log(error)
      throw new HttpException("Failed create multiple quesitons", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
