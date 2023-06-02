import { FormType } from "src/constants/formType.type";

export class CreateFormDto {
  creationDate: Date;
  type: FormType;
  teamId: number;
  creatorId: number;
}
