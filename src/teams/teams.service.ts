import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {

  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    try {
      return await this.teamRepository.save(createTeamDto);
    } catch (error) {
      console.log(error)
    }
  }

  findAll() {
    return `This action returns all teams`;
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

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    try {
      return await this.teamRepository.update(id, updateTeamDto);
    } catch (error) {
      console.log(error)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
