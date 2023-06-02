import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alert } from './entities/alert.entity';
import { Repository } from 'typeorm';
import { CreateAlertDto } from './dto/create-alert.dto';
import { Person } from 'src/persons/entities/person.entity';

@Injectable()
export class AlertsService {
  constructor(
    @InjectRepository(Alert)
    private readonly alertRepository: Repository<Alert>,

    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(createAlertDto: CreateAlertDto) {
    try {
      return await this.alertRepository.save({
        ...createAlertDto,
        filler: {
          id: createAlertDto.fillerId,
        },
        reviewer: {
          id: createAlertDto.reviewerId,
        },
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'creating alert failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByReviewerId(reviewerId: number) {
    try {
      const user = await this.personRepository.findOne({
        relations: [
          'reviewedAlerts',
          'reviewedAlerts.form',
          'reviewedAlerts.form.creator',
        ],
        where: {
          id: reviewerId,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Finding reviewer failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByFillerId(fillerId: number) {
    try {
      const user = await this.personRepository.findOne({
        relations: [
          'filledAlerts',
          'filledAlerts.form',
          'filledAlerts.form.creator',
        ],
        where: {
          id: fillerId,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Finding filler failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
