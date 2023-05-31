import { Answer } from "src/answers/entities/answer.entity";
import { Form } from "src/forms/entities/form.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @ManyToOne(() => Form)
  form: Form;

  @OneToMany(() => Answer, answer => answer.question)
  answers: Answer[];
}
