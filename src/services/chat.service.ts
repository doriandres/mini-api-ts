import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from 'src/entities/chat.entity';
import { Repository } from 'typeorm';
import { EntityService } from './abstract/entity.service';

@Injectable()
export class ChatsService extends EntityService<Chat> {
  constructor(
    @InjectRepository(Chat)
    repo: Repository<Chat>,
  ) {
    super(repo);
  }

  async getByUser(userId: number): Promise<Chat[]> {
    return await this.repo.findBy({ members: { id: userId } });
  }
}
