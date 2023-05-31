import { Form } from "src/forms/entities/form.entity";
import { Question } from "src/questions/entities/question.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  answer: string;

  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Form)
  form: Form;
}
