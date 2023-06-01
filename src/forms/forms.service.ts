import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
