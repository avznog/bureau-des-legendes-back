import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { Person } from 'src/persons/entities/person.entity';
import { UpdatePersonDto } from 'src/persons/dto/update-person.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,

    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    try {
      const newTeam = await this.teamRepository.save({
        ...createTeamDto,
        manager: {
          id: createTeamDto.managerId,
        },
        rh: {
          id: createTeamDto.rhId,
        },
      });
      await this.personRepository.update(createTeamDto.managerId, {
        team: newTeam,
      });
      await this.personRepository.update(createTeamDto.rhId, { team: newTeam });
      return newTeam;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.teamRepository.find({
        relations: ['members', 'rh', 'manager'],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.teamRepository.findOne({
        relations: ['members', 'rh', 'manager'],
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findOneByMemberId(memberId: number) {
    try {
      const user = await this.personRepository.findOne({
        relations: ['team', 'team.members', 'team.rh', 'team.manager', ],
        where: {
          id: memberId,
        },
      });
      return user.team;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Finding team failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    try {
      return await this.teamRepository.update(id, updateTeamDto);
    } catch (error) {
      console.log(error);
    }
  }
}
