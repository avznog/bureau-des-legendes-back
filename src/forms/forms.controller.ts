import { Controller, Get, Param } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get("team/:teamId")
  byTeamId(@Param("teamId") teamId: number) {
    return this.formsService.byTeamId(teamId);
  }

}
