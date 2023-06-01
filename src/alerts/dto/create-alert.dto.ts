import { Status } from "src/constants/status.type";

export class CreateAlertDto {
  creationDate: Date;
  anonymous: boolean;
  sendMail: boolean;
  status: Status;
  fillerId: number;
  reviewerId: number;
  formId: number;
}
