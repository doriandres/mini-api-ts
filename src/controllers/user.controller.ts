import { Controller } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/services/user.service';
import { EntityController } from './abstract/entity.controller';

@Controller('users')
export class UsersController extends EntityController<User> {
  constructor(service: UsersService) {
    super(service);
  }
}
