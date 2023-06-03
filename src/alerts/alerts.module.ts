import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { AlertsController } from './alerts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alert } from './entities/alert.entity';
import { Person } from 'src/persons/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alert, Person])],
  controllers: [AlertsController],
  providers: [AlertsService],
})
export class AlertsModule {}
