import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { Person } from "src/persons/entities/person.entity";
import { Repository } from "typeorm";
import { LoginDto } from "./login.dto";
import { RegisterDto } from "./register.dto";
import { ReturnLoginDto } from "./returnLogin.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    try {
      const user = await this.personRepository.findOne({
        relations: ["team", "filledAlerts"],
        where: {
          email: loginDto.email,
        },
      });
      if (user && (await bcrypt.compare(loginDto.password, user.password))) {
        return {
          person: {
            ...user,
            password: '',
          },
          authorized: true,
        };
      } else {
        return {
          person: {} as Person,
          authorized: false,
        };
      }
    } catch (error) {
      console.log(error);
      throw new HttpException('login failed', HttpStatus.UNAUTHORIZED);
    }
  }

  async register(registerDto: RegisterDto) {
    try {
      if (
        await this.personRepository.exist({
          where: {
            email: registerDto.email,
          },
        })
      ) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      } else {
        return await this.personRepository.save({
          ...registerDto,
          password: await bcrypt.hash(registerDto.password, 10),
        });
      }
    } catch (error) {
      console.log(error);
      throw new HttpException('registration failed', HttpStatus.UNAUTHORIZED);
    }
  }
}
