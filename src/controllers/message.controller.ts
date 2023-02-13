import { Controller } from '@nestjs/common';
import { Post, Get, Param, Body } from '@nestjs/common';
import { ApiResponse } from 'src/dto/api.response';
import { Message } from 'src/entities/message.entity';
import { ChatsService } from 'src/services/chat.service';
import { MessagesService } from 'src/services/message.service';
import { UsersService } from 'src/services/user.service';
import { EntityController } from './abstract/entity.controller';

@Controller('messages')
export class MessagesController extends EntityController<Message> {
  constructor(
    private messageService: MessagesService,
    private userService: UsersService,
    private chatsService: ChatsService,
  ) {
    super(messageService);
  }

  @Post('create')
  async create(
    @Body() entity: Partial<Message>,
  ): Promise<ApiResponse<boolean>> {
    try {
      if(!entity.content){
        return new ApiResponse(null, `Must define content`);
      }

      if (!entity.user?.id) {
        return new ApiResponse(null, `Must define a user`);
      }

      if (!entity.chat?.id) {
        return new ApiResponse(null, `Must define a chat`);
      }

      const user = await this.userService.getById(entity.user.id);
      if (!user) {
        return new ApiResponse(
          null,
          `User with id ${entity.user.id} does not exist`,
        );
      }
      entity.user = user;

      const chat = await this.chatsService.getById(entity.chat.id);
      if (!chat) {
        return new ApiResponse(
          null,
          `Chat with id ${entity.chat.id} does not exist`,
        );
      }
      entity.chat = chat;

      entity.datetime = new Date();

      super.create(entity);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }

  @Get('chat/:chatId')
  async getByUser(
    @Param('chatId') chatId: number,
  ): Promise<ApiResponse<Message[]>> {
    try {
      const data = await this.messageService.getByChat(chatId);
      return new ApiResponse(data);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }
}
