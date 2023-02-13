import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';
import { EntityService } from './abstract/entity.service';

@Injectable()
export class MessagesService extends EntityService<Message> {
  constructor(
    @InjectRepository(Message)
    repo: Repository<Message>,
  ) {
    super(repo);
  }

  async getByChat(chatId: number): Promise<Message[]> {
    return await this.repo.findBy({ chat: { id: chatId } });
  }
}
