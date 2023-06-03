import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get('by-reviewer-id/:reviewerId')
  findByReviewerId(@Param('reviewerId') reviewerId: number) {
    return this.alertsService.findByReviewerId(reviewerId);
  }

  @Get('by-filler-id/:fillerId')
  findByFillerId(@Param('fillerId') fillerId: number) {
    return this.alertsService.findByFillerId(fillerId);
  }

  @Post()
  create(@Body() createAlertDto: CreateAlertDto) {
    return this.alertsService.create(createAlertDto);
  }
}
