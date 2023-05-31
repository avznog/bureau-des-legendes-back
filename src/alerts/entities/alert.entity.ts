import { Status } from "src/constants/status.type";
import { Form } from "src/forms/entities/form.entity";
import { Message } from "src/messages/entities/message.entity";
import { Person } from "src/persons/entities/person.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alert {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creationDate: Date;

  @Column()
  anonymous: boolean;

  @Column()
  sendMail: boolean;

  @Column()
  status: Status;

  @ManyToOne(() => Person)
  filler: Person;

  @ManyToOne(() => Person)
  reviewer: Person;

  @ManyToOne(() => Form)
  form: Form;

  @OneToMany(() => Message, message => message.alert)
  messages: Message[];

}
