import { Alert } from "src/alerts/entities/alert.entity";
import { Person } from "src/persons/entities/person.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  content: string;

  @ManyToOne(() => Alert)
  alert: Alert;

  @ManyToOne(() => Person)
  sender: Person;
}
