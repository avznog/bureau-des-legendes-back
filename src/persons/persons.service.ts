import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/constants/role.type';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) {}

  async getAllFreeRh() {
    try {
      const rhs =  await this.personRepository.find({
        relations: ["team"],
        where: {
          role: Role.RH,
        }
      })
      return rhs.filter(person => !person.team);
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      return await this.personRepository.find();
    } catch (error) {
      console.log(error)
    }
  }
}
