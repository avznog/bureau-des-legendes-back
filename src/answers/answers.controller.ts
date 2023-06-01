import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post("multiple")
  createMultiple(@Body() createAnswersDto: CreateAnswerDto[]) {
    return this.answersService.createMultiple(createAnswersDto);  
  }
}
