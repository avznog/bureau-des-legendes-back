import { Alert } from "src/alerts/entities/alert.entity";
import { Role } from "src/constants/role.type";
import { Form } from "src/forms/entities/form.entity";
import { Message } from "src/messages/entities/message.entity";
import { Team } from "src/teams/entities/team.entity";

export class CreatePersonDto {
  
  firstname: string;

  lastname: string;

  email: string;

  password: string;

  phone: string;

  photo: string;

  role: Role;

  teamId: number;
}
