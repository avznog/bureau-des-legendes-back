import { Controller, Get } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}
  
  @Get("/all-free-rh")
  getAllFreeRh() {
    return this.personsService.getAllFreeRh();
  }

  @Get("find-all")
  findAll() {
    return this.personsService.findAll();
  }
}
