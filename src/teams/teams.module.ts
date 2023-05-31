import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Person } from 'src/persons/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Person])],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
