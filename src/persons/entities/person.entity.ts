import { Alert } from "src/alerts/entities/alert.entity";
import { Role } from "src/constants/role.type";
import { Form } from "src/forms/entities/form.entity";
import { Message } from "src/messages/entities/message.entity";
import { Team } from "src/teams/entities/team.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  lastname: string;

  @Column({nullable: true})
  email: string;

  @Column({nullable: true})
  password: string;

  @Column({nullable: true})
  phone: string;

  @Column({nullable: true})
  photo: string;

  @Column({nullable: true})
  role: Role;

  @ManyToOne(() => Team)
  team: Team;

  @OneToMany(() => Alert, alert => alert.filler)
  filledAlert: Alert[];

  @OneToMany(() => Alert, alert => alert.reviewer)
  reviewedAlerts: Alert[];

  @OneToMany(() => Message, message => message.sender)
  messages: Message[];

  @OneToMany(() => Form, form => form.creator)
  forms: Form[];

}
