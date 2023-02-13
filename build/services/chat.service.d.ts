import { Chat } from 'src/entities/chat.entity';
import { Repository } from 'typeorm';
import { EntityService } from './abstract/entity.service';
export declare class ChatsService extends EntityService<Chat> {
    constructor(repo: Repository<Chat>);
    getByUser(userId: number): Promise<Chat[]>;
}
