import { Inject } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from 'src/messages/messages.service';

@WebSocketGateway(8001, { cors: true })
export class ConversationsGateway {
  @Inject(MessagesService)
  private messageService: MessagesService;

  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() createMessageDto): Promise<void> {
    console.log(createMessageDto);
    const newMessage = await this.messageService.create(createMessageDto);
    this.server.emit('message', newMessage);
  }
}
