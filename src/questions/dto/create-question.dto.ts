import { Form } from "src/forms/entities/form.entity";

export class CreateQuestionDto {
  question: string;
  form: Form;
}
