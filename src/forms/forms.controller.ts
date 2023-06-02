import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get("team/:teamId")
  byTeamId(@Param("teamId") teamId: number) {
    return this.formsService.byTeamId(teamId);
  }

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return this.formsService.create(createFormDto);
  }

}
