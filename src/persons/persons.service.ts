import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/constants/role.type';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Team } from 'src/teams/entities/team.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,

    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>
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

  async update(personId: number, updatePersonDto: UpdatePersonDto) {
    try {
      return await this.personRepository.update(personId, updatePersonDto);
    } catch (error) {
      console.log(error)
    }
  }

  async setTeam(teamId: number, personId: number) {
    try {
      const team = await this.teamRepository.findOne({where: {id: teamId}});
      return await this.personRepository.update(personId, { team: team });
    } catch (error) {
      console.log(error)
    }
  }
}
