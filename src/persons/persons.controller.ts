import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}
  
  @Get("all-free-rh")
  getAllFreeRh() {
    return this.personsService.getAllFreeRh();
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Patch(":personId")
  update(@Param("personId") personId: number,@Body() updatePersonDto: UpdatePersonDto) {
    console.log(updatePersonDto)
    return this.personsService.update(personId, updatePersonDto);
  }

  @Patch("set-team/:teamId/:personId")
  setTeam(@Param("teamId") teamId: number, @Param("personId") personId: number) {
    console.log(teamId)
    console.log(personId)
    return this.personsService.setTeam(teamId, personId);
  }
}
