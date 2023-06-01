import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertsModule } from './alerts/alerts.module';
import { AnswersModule } from './answers/answers.module';
import { FormsModule } from './forms/forms.module';
import { MessagesModule } from './messages/messages.module';
import { PersonsModule } from './persons/persons.module';
import { QuestionsModule } from './questions/questions.module';
import { TeamsModule } from './teams/teams.module';
import { Alert } from './alerts/entities/alert.entity';
import { Answer } from './answers/entities/answer.entity';
import { Form } from './forms/entities/form.entity';
import { Message } from './messages/entities/message.entity';
import { Person } from './persons/entities/person.entity';
import { Question } from './questions/entities/question.entity';
import { Team } from './teams/entities/team.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || "192.168.0.244",
      port: +process.env.POSTGRES_PORT ,
      username: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "postgres",
      database: process.env.POSTGRES_DATABASE || "bureaudeslegendes",
      synchronize: true,
      autoLoadEntities: true,
      entities: [Alert, Answer, Form, Message, Person, Question, Team]
    }),
    ConfigModule.forRoot(),
    AlertsModule,
    AnswersModule,
    FormsModule,
    MessagesModule,
    PersonsModule,
    QuestionsModule,
    TeamsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
