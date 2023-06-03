import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post()
  create(@Body() createAlertDto: CreateAlertDto) {
    return this.alertsService.create(createAlertDto);
  }

  @Get("by-filler/:filledId")
  findByFillerId(@Param("filledId") fillerId: number) {
    return this.alertsService.findByFillerId(fillerId);
  }

  @Get("by-reviewer/:reviewerId")
  findByReviewerId(@Param("reviewerId") reviewerId: number) {
    return this.alertsService.findByReviewerId(reviewerId);
  }

}
