import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alert } from './entities/alert.entity';
import { Repository } from 'typeorm';
import { CreateAlertDto } from './dto/create-alert.dto';
import { Person } from 'src/persons/entities/person.entity';
import { Status } from 'src/constants/status.type';

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
        status: Status.STARTED,
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
      return await this.alertRepository.find({
        relations: ["reviewer", "form"],
        where: {
          reviewer: {
            id: reviewerId
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findByFillerId(fillerId: number) {
    try {
      return await this.alertRepository.find({
        relations: ["filler", "reviewer", "form"],
        where: {
          filler: {
            id: fillerId
          }
        }
      });
    } catch (error) {
      console.log(error);
      throw new HttpException("Failed", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
