import { ApiResponse } from 'src/dto/api.response';
import { Chat } from 'src/entities/chat.entity';
import { ChatsService } from 'src/services/chat.service';
import { UsersService } from 'src/services/user.service';
import { EntityController } from './abstract/entity.controller';
export declare class ChatsController extends EntityController<Chat> {
    private chatService;
    private userService;
    constructor(chatService: ChatsService, userService: UsersService);
    create(entity: Partial<Chat>): Promise<ApiResponse<boolean>>;
    getByUser(userId: number): Promise<ApiResponse<Chat[]>>;
}
