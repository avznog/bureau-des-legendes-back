import { Form } from "src/forms/entities/form.entity";
import { Person } from "src/persons/entities/person.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Person, person => person.team)
  rh: Person;

  @OneToOne(() => Person, person => person.team)
  manager: Person;

  @OneToMany(() => Person, person => person.team)
  members: Person[];

  @OneToMany(() => Person, person => person.team)
  forms: Form[];
}
