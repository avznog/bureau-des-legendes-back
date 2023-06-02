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
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Alert } from './alerts/entities/alert.entity';
import { Answer } from './answers/entities/answer.entity';
import { Form } from './forms/entities/form.entity';
import { Message } from './messages/entities/message.entity';
import { Person } from './persons/entities/person.entity';
import { Question } from './questions/entities/question.entity';
import { Team } from './teams/entities/team.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'R0xwe331SEoZoYa',
      database: 'bureaudeslegendes',
      synchronize: true,
      autoLoadEntities: true,
      entities: [Alert, Answer, Form, Message, Person, Question, Team],
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
