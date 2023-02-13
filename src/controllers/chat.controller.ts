import { Controller } from '@nestjs/common';
import { Post, Get, Param, Body } from '@nestjs/common';
import { ApiResponse } from 'src/dto/api.response';
import { Chat } from 'src/entities/chat.entity';
import { User } from 'src/entities/user.entity';
import { ChatsService } from 'src/services/chat.service';
import { UsersService } from 'src/services/user.service';
import { EntityController } from './abstract/entity.controller';

@Controller('chats')
export class ChatsController extends EntityController<Chat> {
  constructor(
    private chatService: ChatsService,
    private userService: UsersService,
  ) {
    super(chatService);
  }

  @Post('create')
  async create(@Body() entity: Partial<Chat>): Promise<ApiResponse<boolean>> {
    try {
      const members: User[] = [];
      for (const member of entity.members) {
        const user = await this.userService.getById(member.id);
        if (user) {
          members.push(user);
        } else {
          return new ApiResponse(null, `User with id ${member.id} not found`);
        }
      }
      entity.members = members;
      super.create(entity);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }

  @Get('user/:userId')
  async getByUser(
    @Param('userId') userId: number,
  ): Promise<ApiResponse<Chat[]>> {
    try {
      const data = await this.chatService.getByUser(userId);
      return new ApiResponse(data);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }
}
