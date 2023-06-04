import { Module } from '@nestjs/common';
import { ConversationsGateway } from './conversations.gateway';
import { MessagesModule } from 'src/messages/messages.module';

@Module({
  imports: [MessagesModule],
  providers: [ConversationsGateway],
})
export class ConversationsModule {}
