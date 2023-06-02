import { Alert } from "src/alerts/entities/alert.entity";
import { Answer } from "src/answers/entities/answer.entity";
import { FormType } from "src/constants/formType.type";
import { Person } from "src/persons/entities/person.entity";
import { Question } from "src/questions/entities/question.entity";
import { Team } from "src/teams/entities/team.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creationDate: Date;

  @Column({nullable: true, type: "varchar"})
  type: FormType;

  @ManyToOne(() => Form)
  team: Team;

  @ManyToOne(() => Person)
  creator: Person;

  @OneToMany(() => Alert, alert => alert.form)
  alerts: Alert[];

  @OneToMany(() => Question, question => question.form)
  questions: Question[];

  @OneToMany(() => Answer, answer => answer.form)
  answers: Answer[];
}
