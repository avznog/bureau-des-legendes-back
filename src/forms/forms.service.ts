import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from './entities/form.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>
  ) {}

  async byTeamId(teamId: number) {
    try {
      return await this.formRepository.find({
        relations: ["questions"],
        where: {
          team: {
            id: teamId
          }
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async create(createFormDto: CreateFormDto) {
    console.log(createFormDto)
    try {
      return await this.formRepository.save({
        ...createFormDto,
        team: {
          id: createFormDto.teamId
        },
        creator: {
          id: createFormDto.creatorId
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
