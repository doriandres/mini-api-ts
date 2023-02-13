import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';
import { EntityService } from './abstract/entity.service';
export declare class MessagesService extends EntityService<Message> {
    constructor(repo: Repository<Message>);
    getByChat(chatId: number): Promise<Message[]>;
}
