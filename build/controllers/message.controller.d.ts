import { ApiResponse } from 'src/dto/api.response';
import { Message } from 'src/entities/message.entity';
import { ChatsService } from 'src/services/chat.service';
import { MessagesService } from 'src/services/message.service';
import { UsersService } from 'src/services/user.service';
import { EntityController } from './abstract/entity.controller';
export declare class MessagesController extends EntityController<Message> {
    private messageService;
    private userService;
    private chatsService;
    constructor(messageService: MessagesService, userService: UsersService, chatsService: ChatsService);
    create(entity: Partial<Message>): Promise<ApiResponse<boolean>>;
    getByUser(chatId: number): Promise<ApiResponse<Message[]>>;
}
