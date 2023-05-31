import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { Person } from 'src/persons/entities/person.entity';

@Injectable()
export class TeamsService {

  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,

    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    try {
      return await this.teamRepository.save(createTeamDto);
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      return await this.teamRepository.find({
        relations: ["members"]
      })
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id: number) {
    try {
      return await this.teamRepository.findOne({
        where: {
          id: id
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  async findOneByMemberId(memberId: number) {
    try {
      const user =  await this.personRepository.findOne({
        relations: ["team"],
        where: {
          id: memberId
        }
      });

      return user.team;
    } catch (error) {
      console.log(error)
      throw new HttpException("Finding team failed", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    try {
      return await this.teamRepository.update(id, updateTeamDto);
    } catch (error) {
      console.log(error)
    }
  }
}
