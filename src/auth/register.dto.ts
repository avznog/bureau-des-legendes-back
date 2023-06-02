import { Role } from 'src/constants/role.type';

export interface RegisterDto {
  role: Role;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
}
