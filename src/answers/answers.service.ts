import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {

  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>
  ) {}

  createMultiple(createAnswersDto: CreateAnswerDto[]) {
    try {
      createAnswersDto.forEach(async createAnswerDto => {
        await this.answerRepository.save({
          ...createAnswerDto,
          question: {
            id: createAnswerDto.questionId
          },
          form: {
            id: createAnswerDto.formId
          }
        });
      })
    } catch (error) {
      console.log(error)
    }
  }
}
