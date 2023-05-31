import { Person } from "src/persons/entities/person.entity";

export interface ReturnLoginDto {
  person: Person;
  authorized: boolean;
}